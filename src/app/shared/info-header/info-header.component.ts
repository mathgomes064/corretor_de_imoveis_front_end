import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit   {
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
}
