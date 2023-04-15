import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-imovel-modal',
  templateUrl: './edit-imovel-modal.component.html',
  styleUrls: ['./edit-imovel-modal.component.css']
})
export class EditImovelModalComponent {
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ){}

  public editImovelForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    valor_compra: ['', [Validators.required]],
    valor_venda: ['', [Validators.required]],
    status: ['', [Validators.required]],
  })

  // public updateImovel(payload: {status: string, name: string, description: string, valor_venda: number, valor_compra: number}){
  //   const token = localStorage.getItem("access_token")
  //   return this.http.patch(`http://localhost:3000/imoveis`, payload, {
  //     headers: {
  //       "Authorization": token!
  //     }
  //   }).subscribe(() =>{
  //     return window.location.reload();
  //   }),
  //   catchError((err) =>{
  //     return throwError(() => console.log(err))
  // })
  // }

  public submitEditImovelForm(){
      if(this.editImovelForm.valid){
        // this.updateImovel({
        //   status: this.editImovelForm.value.status,
        //   name: this.editImovelForm.value.name,
        //   description: this.editImovelForm.value.description,
        //   valor_compra: this.editImovelForm.value.valor_compra,
        //   valor_venda: this.editImovelForm.value.valor_venda,
        // }).subscribe({
        //   next: (res) => res,
        //   error: (err) => err
        // })
      }
  }

  
}
