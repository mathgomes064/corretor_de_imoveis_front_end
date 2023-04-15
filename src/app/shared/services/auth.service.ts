import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public cadastrar(payload: {name: string, email: string, senha: string, contato: string}): Observable<any>{
    return this.http.post(`${this.url}/user`, payload).pipe(
      map((res) =>{
        return this.router.navigate([''])
      }),
      catchError((err) =>{
          return throwError(() => console.log(err))
      })
    )
  }

  public logar(payload: {email: string, senha: string}): Observable<any>{
    return this.http.post<{token: string}>(`${this.url}/login`, payload).pipe(
      map((res) =>{ 
        localStorage.clear()
        localStorage.setItem('access_token', res.token)
        return this.router.navigate(['home'])
      }),
      catchError((err) =>{
          return throwError(() => "Usuário ou senha incorreta")
      })
    )
  }

  public userId: string = ""
  
  get getUserData(): Observable<any>{
    const token = localStorage.getItem("access_token")
    return this.http.get<any>(`${this.url}/user/me`, {
      headers: {
        "Authorization": token!
      }
    }).pipe(
      tap(res => res),
      tap(res => this.userId = res.id)
    )
  }

  public updateUserData(payload: {name: string, email: string, senha: string, contato: string}): Observable<any>{
    const token = localStorage.getItem("access_token")
    return this.http.patch(`${this.url}/user/${this.userId}`, payload, {
      headers: {
        "Authorization": token!
      }
    }).pipe(
      map((res) =>{
        return window.location.reload();
      }),
      catchError((err) =>{
          return throwError(() => console.log(err))
      })
    )
  }

  public registerImovel(payload: {status: boolean, image: string, name: string, description: string, valor_compra: number, valor_venda: number, user_id: string}): Observable<any>{
    const token = localStorage.getItem("access_token")
    return this.http.post(`${this.url}/imoveis`, payload, {
      headers: {
        "Authorization": token!
      }
    }).pipe(
      map((res) =>{
        return window.location.reload();
      }),
      catchError((err) =>{
          return throwError(() => console.log(err))
      })
    )
  }

  get getImoveisByUser(): Observable<any>{
    const token = localStorage.getItem("access_token")
    return this.http.get<any>(`${this.url}/user/me`, {
      headers: {
        "Authorization": token!
      }
    }).pipe(
      tap(res => res),
    )
  }

  public deslogar(){
    localStorage.clear()
    return this.router.navigate([''])
  }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('access_token');

    if(!token){
      return false
    }
    const jwtHelper = new JwtHelperService()

    return !jwtHelper.isTokenExpired(token)
  }
}
