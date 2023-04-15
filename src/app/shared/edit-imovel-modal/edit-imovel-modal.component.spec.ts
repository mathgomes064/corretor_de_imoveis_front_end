import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImovelModalComponent } from './edit-imovel-modal.component';

describe('EditImovelModalComponent', () => {
  let component: EditImovelModalComponent;
  let fixture: ComponentFixture<EditImovelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditImovelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditImovelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
