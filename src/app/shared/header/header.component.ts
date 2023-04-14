import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userData: any

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.authService.getUserData.subscribe(
      res => {
        this.userData = res
      } 
    );
  }

  public deslogar(){
    this.authService.deslogar()
  }

}
