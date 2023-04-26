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

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ){}

  ngOnInit(): void {
    this.authService.getImoveisByUser.subscribe(
      res => {
        this.imoveis = res.imoveis;
      } 
    );

  }
  
  public deleteImoveis(imovelId: string){
    const token = localStorage.getItem("access_token")
    return this.http.delete(`${this.authService.url}/imoveis/${imovelId}`, {
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
