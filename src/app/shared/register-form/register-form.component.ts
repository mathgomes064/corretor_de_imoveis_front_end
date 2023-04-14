import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {}

  public registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
    contato: ['', [Validators.required]],
  })

  public submitRegisterForm(){
    if(this.registerForm.valid){
      this.authService.cadastrar({
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        senha: this.registerForm.value.senha,
        contato: this.registerForm.value.contato
      }).subscribe({
        next: (res) => res,
        error: (err) => err
      })
    }
  }

}
