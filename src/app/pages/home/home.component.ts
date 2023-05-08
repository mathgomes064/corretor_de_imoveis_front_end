import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public userData: any

  constructor(
    private authService: AuthService,
  ){};

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
