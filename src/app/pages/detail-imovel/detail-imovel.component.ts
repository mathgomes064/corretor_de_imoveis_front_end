import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-detail-imovel',
  templateUrl: './detail-imovel.component.html',
  styleUrls: ['./detail-imovel.component.css']
})
export class DetailImovelComponent implements OnInit {
  private url: string = 'http://localhost:3000/imoveis'

  public imovel: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    this.getImovel
  }

  get getImovel(){

    const id = this.activatedRoute.snapshot.params['id']

    const imovel = this.authService.getImovelById(`${this.url}/${id}`)

    return forkJoin([imovel]).subscribe(
      res => {
        this.imovel = res
        console.log(this.imovel)
      }
    )
  }

}
