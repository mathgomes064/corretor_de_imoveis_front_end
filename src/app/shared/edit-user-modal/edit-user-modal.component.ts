import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent {
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  public updateUserForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
    contato: ['', [Validators.required]],
  })

  public submitUpdateUserForm(){
    if(this.updateUserForm.valid){
      this.authService.updateUserData({
        name: this.updateUserForm.value.name,
        email: this.updateUserForm.value.email,
        senha: this.updateUserForm.value.senha,
        contato: this.updateUserForm.value.contato
      }).subscribe({
        next: (res) => res,
        error: (err) => err
      })
    }
  }

}
