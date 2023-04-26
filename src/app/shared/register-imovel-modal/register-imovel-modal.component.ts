import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { imovelCreate } from '../models';

@Component({
  selector: 'app-register-imovel-modal',
  templateUrl: './register-imovel-modal.component.html',
  styleUrls: ['./register-imovel-modal.component.css']
})
export class RegisterImovelModalComponent implements OnInit {
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
    this.createImovelForm(new imovelCreate())
  }

  registerImovelForm!: FormGroup

  public isStatusValid: boolean = false;
  public isImgValid: boolean = false;
  public isNameValid: boolean = false;
  public isValorCompraValid: boolean = false;
  public isValorVendaValid: boolean = false;
  public isDescriptionValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  public createImovelForm(register: imovelCreate){
    this.registerImovelForm = this.formBuilder.group({
      image: [register.image, [Validators.required]],
      name: [register.name, [Validators.required]],
      description: [register.description, [Validators.required]],
      valor_compra: [register.valor_compra, [Validators.required]],
      valor_venda: [register.valor_venda, [Validators.required]],
      status: [register.status, [Validators.required]],
    })
  }

  public submitRegisterImovelForm(){
    const statusValid = this.registerImovelForm.get("status");
    const imgValid = this.registerImovelForm.get("image");
    const nameValid = this.registerImovelForm.get("name");
    const valorCompraValid = this.registerImovelForm.get("valor_compra");
    const valorVendaValid = this.registerImovelForm.get("valor_venda");
    const descriptionValid = this.registerImovelForm.get("description");

    if(statusValid?.errors){
      this.isStatusValid = !this.isStatusValid;
    }
    
    if(imgValid?.errors){
      this.isImgValid = !this.isImgValid;
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

    if(this.registerImovelForm.valid){
      this.authService.registerImovel({
        ...this.registerImovelForm.value,
        user_id: this.authService.userId
      }).subscribe({
        next: (res) => res,
        error: (err) => err
      })
    }
  }
}
