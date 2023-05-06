import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { userCreate } from '../models';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  public isNameValid: boolean = false;
  public isEmailValid: boolean = false;
  public isSenhaValid: boolean = false;
  public isContatoValid: boolean = false;

  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.createRegisterForm(new userCreate())
  }

  public createRegisterForm(register: userCreate){
    this.registerForm = this.formBuilder.group({
      name: [register.name, [Validators.required]],
      email: [register.email, [Validators.required, Validators.email]],
      senha: [register.senha, [Validators.required]],
      contato: [register.contato, [Validators.required]],
    })
  }

  public submitRegisterForm(){
    const nameValid = this.registerForm.get("name");
    const emailValid = this.registerForm.get("email");
    const senhaValid = this.registerForm.get("senha");
    const contatoValid = this.registerForm.get("contato");

    if(nameValid?.errors){
      this.isNameValid = !this.isNameValid;
    }
    
    if(emailValid?.errors){
      this.isEmailValid = !this.isEmailValid;
    }

    if(senhaValid?.errors){
      this.isSenhaValid = !this.isSenhaValid;
    }

    if(contatoValid?.errors){
      this.isContatoValid = !this.isContatoValid;
    }

    if(this.registerForm.valid){
      this.authService.cadastrar({
        ...this.registerForm.value
      }).subscribe({
        next: (res) => res,
        error: (err) => console.log(err.error.message)
      })
    }
  }
}
