import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IUserEditLogin } from '../models';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit{
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }
  public userData: any
  
  ngOnInit(): void {
    this.authService.getUserData.subscribe(
      res =>{
        this.userData = res
        console.log(this.userData)
      }
    )
    this.editUserForm(new IUserEditLogin())
  }
    
  updateUserForm!: FormGroup;

  public isNameValid: boolean = false;
  public isEmailValid: boolean = false;
  public isSenhaValid: boolean = false;
  public isContatoValid: boolean = false;

  public name: string = "Matheus"

  public hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  public editUserForm(register: IUserEditLogin){
    this.updateUserForm = this.formBuilder.group({
      name: [register.name, [Validators.required]],
      email: [register.email, [Validators.required, Validators.email]],
      senha: [register.senha, [Validators.required]],
      contato: [register.contato, [Validators.required]],
    })
  }

  public submitUpdateUserForm(){
    const nameValid = this.updateUserForm.get("name");
    const emailValid = this.updateUserForm.get("email");
    const senhaValid = this.updateUserForm.get("senha");
    const contatoValid = this.updateUserForm.get("contato");

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

    if(this.updateUserForm.valid){
      this.authService.updateUserData({
        ...this.updateUserForm.value
      }).subscribe({
        next: (res) => res,
        error: (err) => err
      })
    }
  }

}
