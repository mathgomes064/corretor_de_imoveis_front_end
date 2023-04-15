import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {
  public imoveis: any

  public imoveisCadastrados: number = 0
  public imoveisEmEstoque: number = 0
  public imoveisVendidos: number = 0
  public valorTotalComprado: number = 0
  public valorTotalVendido: number = 0

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.getImoveisByUser.subscribe(
      res => {
        this.imoveis = res.imoveis
        console.log(this.imoveis)
        
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
}
