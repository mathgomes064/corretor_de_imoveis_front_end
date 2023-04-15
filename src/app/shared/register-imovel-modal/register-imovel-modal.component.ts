import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-imovel-modal',
  templateUrl: './register-imovel-modal.component.html',
  styleUrls: ['./register-imovel-modal.component.css']
})
export class RegisterImovelModalComponent {
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  public registerImovelForm: FormGroup = this.formBuilder.group({
    image: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    valor_compra: ['', [Validators.required]],
    valor_venda: ['', [Validators.required]],
    status: ['', [Validators.required]],
  })

  public submitRegisterImovelForm(){
    if(this.registerImovelForm.valid){
      this.authService.registerImovel({
        status: this.registerImovelForm.value.status,
        image: this.registerImovelForm.value.image,
        name: this.registerImovelForm.value.name,
        description: this.registerImovelForm.value.description,
        valor_compra: this.registerImovelForm.value.valor_compra,
        valor_venda: this.registerImovelForm.value.valor_venda,
        user_id: this.authService.userId
      }).subscribe({
        next: (res) => res,
        error: (err) => err
      })
    }
  }
}
