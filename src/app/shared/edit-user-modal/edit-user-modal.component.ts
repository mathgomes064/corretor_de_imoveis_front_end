import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { userEdit } from '../models';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit{
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.getUserData.subscribe(
      res =>{
        this.editUserForm(res)
      }
    )
  }

  public mostrar: boolean = false;
  public hide: boolean = true;

  toggle(){
    this.mostrar = !this.mostrar;
  }
   
  updateUserForm!: FormGroup;

  public isNameValid: boolean = false;
  public isEmailValid: boolean = false;
  public isSenhaValid: boolean = false;
  public isContatoValid: boolean = false;

  public editUserForm(register: userEdit){
    this.updateUserForm = this.formBuilder.group({
      name: [register.name, [Validators.required]],
      email: [register.email, [Validators.required, Validators.email]],
      senha: ["", [Validators.required]],
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
