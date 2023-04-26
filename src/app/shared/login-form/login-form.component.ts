import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { userLogin } from '../models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  public isEmailValid: boolean = false;
  public isSenhaValid: boolean = false;

  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.createLoginForm(new userLogin())
  }

  public createLoginForm(register: userLogin){
    this.loginForm = this.formBuilder.group({
      email: [register.email, [Validators.required, Validators.email]],
      senha: [register.senha, [Validators.required]],
    })
  }

  public mesgError: boolean = false;

  public submitForm(){
    const emailValid = this.loginForm.get("email");
    const senhaValid = this.loginForm.get("senha");

    if(emailValid?.errors){
      this.isEmailValid = !this.isEmailValid;
    }

    if(senhaValid?.errors){
      this.isSenhaValid = !this.isSenhaValid;
    }

    if(this.loginForm.valid){
      this.authService.logar({
        ...this.loginForm.value
      }).subscribe({
        next: (res) => res,
        error: (err) => err,
      })
    }
  }

}
