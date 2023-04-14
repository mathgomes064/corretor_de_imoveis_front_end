import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Component({
  selector: 'cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})

export class CardsContainerComponent implements OnInit {
  private url: string = "http://localhost:3000";

  public imoveis: any

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.authService.getImoveisByUser.subscribe(
      res => {
        this.imoveis = res.imoveis
      } 
    );
  }

  public deleteImoveis(imovelId: string): Observable<any>{
    const token = localStorage.getItem("access_token")
    return this.http.delete(`${this.url}/imoveis/${imovelId}`, {
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
  
}
