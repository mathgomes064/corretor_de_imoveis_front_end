import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})

export class CardsContainerComponent implements OnInit {
  public imoveis: any

  public imoveisCadastrados: number = 0
  public imoveisEmEstoque: number = 0
  public imoveisVendidos: number = 0
  public valorTotalComprado: number = 0
  public valorTotalVendido: number = 0
  public lucroTotal: number = 0

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ){}

  ngOnInit(): void {
    this.authService.getImoveisByUser.subscribe(
      res => {
        this.imoveis = res.imoveis
      } 
    );

  }
  
  public deleteImoveis(imovelId: string){
    const token = localStorage.getItem("access_token")
    return this.http.delete(`http://localhost:3000/imoveis/${imovelId}`, {
      headers: {
        "Authorization": token!
      }
    }).subscribe(() =>{
      return window.location.reload();
    }),
    catchError((err) =>{
      return throwError(() => console.log(err))
  })
  }
  
}
