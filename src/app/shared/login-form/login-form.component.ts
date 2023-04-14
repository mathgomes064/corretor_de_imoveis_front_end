import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {}

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],

  })

  public mesgError: boolean = false;

  public submitForm(){
    if(this.formAuth.valid){
      this.authService.logar({
        email: this.formAuth.value.email,
        senha: this.formAuth.value.senha,
      }).subscribe({
        next: (res) => res,
        error: (err) => (this.mesgError = !this.mesgError) 
      })
    }
  }

}
