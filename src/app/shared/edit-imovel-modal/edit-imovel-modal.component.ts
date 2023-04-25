import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { imovelUpdate } from '../models';

@Component({
  selector: 'app-edit-imovel-modal',
  templateUrl: './edit-imovel-modal.component.html',
  styleUrls: ['./edit-imovel-modal.component.css']
})
export class EditImovelModalComponent implements OnInit {
  mostrar: boolean = false;

  public imovelIdtoUpdate!: string | undefined

  toggle(id: string | undefined = undefined){
    this.mostrar = !this.mostrar;
    this.imovelIdtoUpdate = id
  }

  ngOnInit(): void {
    this.updateImovelForm(new imovelUpdate())
  }

  editImovelForm!: FormGroup

  public isStatusValid: boolean = false;
  public isNameValid: boolean = false;
  public isValorCompraValid: boolean = false;
  public isValorVendaValid: boolean = false;
  public isDescriptionValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ){}

  public updateImovelForm(register: imovelUpdate){
    this.editImovelForm = this.formBuilder.group({
      name: [register.name, [Validators.required]],
      description: [register.description, [Validators.required]],
      valor_compra: [register.valor_compra, [Validators.required]],
      valor_venda: [register.valor_venda, [Validators.required]],
      status: [register.status, [Validators.required]],
    })
  }


  public updateImovel(payload: {status: string, name: string, description: string, valor_venda: number, valor_compra: number}){
    const token = localStorage.getItem("access_token")
    return this.http.patch(`${this.authService.url}/imoveis/${this.imovelIdtoUpdate}`, JSON.stringify(payload), {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token!
      }
    })
  }

  public submitEditImovelForm(){
    const statusValid = this.editImovelForm.get("status");
    const nameValid = this.editImovelForm.get("name");
    const valorCompraValid = this.editImovelForm.get("valor_compra");
    const valorVendaValid = this.editImovelForm.get("valor_venda");
    const descriptionValid = this.editImovelForm.get("description");

    if(statusValid?.errors){
      this.isStatusValid = !this.isStatusValid;
    }
    
    if(nameValid?.errors){
      this.isNameValid = !this.isNameValid;
    }

    if(valorCompraValid?.errors){
      this.isValorCompraValid = !this.isValorCompraValid;
    }

    if(valorVendaValid?.errors){
      this.isValorVendaValid = !this.isValorVendaValid;
    }

    if(descriptionValid?.errors){
      this.isDescriptionValid = !this.isDescriptionValid;
    }
      if(this.editImovelForm.valid){
        this.updateImovel({
          ...this.editImovelForm.value
        }).subscribe(() =>{
          return window.location.reload();
        }),
        catchError((err) =>{
          return throwError(() => console.log(err))
      })
      }
  }

  
}
