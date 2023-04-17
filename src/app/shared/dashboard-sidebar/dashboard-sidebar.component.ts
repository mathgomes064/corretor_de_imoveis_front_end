import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {
  public url: string = "https://corretor-de-imoveis.onrender.com"
  public imoveis: any

  public imoveisCadastrados: number = 0
  public imoveisEmEstoque: number = 0
  public imoveisVendidos: number = 0
  public valorTotalComprado: number = 0
  public valorTotalVendido: number = 0

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
    this.authService.getImoveisByUser.subscribe(
      res => {
        this.imoveis = res.imoveis
        
        for(let i = 0; i <= this.imoveis.length; i++){
          this.imoveisCadastrados = this.imoveis.length
          if(this.imoveis[i]['status'] === "Em Estoque"){
            this.imoveisEmEstoque ++
          }
          if(this.imoveis[i]['status'] === "Vendido"){
            this.imoveisVendidos ++
          }
          this.valorTotalComprado += this.imoveis[i]['valor_compra']
          this.valorTotalVendido += this.imoveis[i]['valor_venda']
        }
      } 
    );
  }

  public deleteProfile(){
    const token = localStorage.getItem("access_token")
    return this.http.delete(`${this.url}/user/${this.authService.userId}`, {
      headers: {
        "Authorization": token!
      }
    }).subscribe(() =>{
        return this.router.navigate(['']);
    }),
    catchError((err) =>{
      return throwError(() => console.log(err))
  })
  }
}
