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
  private url: string = 'https://corretor-de-imoveis.onrender.com'

  public imovel: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.authService.getImovelById(`${this.url}/imoveis/${id}`).subscribe(
      data => this.imovel = data
    )
  }

}
