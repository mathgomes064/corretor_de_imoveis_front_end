import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-imovel-modal',
  templateUrl: './edit-imovel-modal.component.html',
  styleUrls: ['./edit-imovel-modal.component.css']
})
export class EditImovelModalComponent {
  mostrar: boolean = false;

  toggle(){
    this.mostrar = !this.mostrar;
  }
}
