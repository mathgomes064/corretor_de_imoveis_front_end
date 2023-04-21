import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-imovel-modal',
  templateUrl: './edit-imovel-modal.component.html',
  styleUrls: ['./edit-imovel-modal.component.css']
})
export class EditImovelModalComponent {
  mostrar: boolean = false;

  public imovelIdtoUpdate!: string | undefined

  toggle(id: string | undefined = undefined){
    this.mostrar = !this.mostrar;
    this.imovelIdtoUpdate = id
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ){}

  public editImovelForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    valor_compra: ['', [Validators.required]],
    valor_venda: ['', [Validators.required]],
    status: ['', [Validators.required]],
  })

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
