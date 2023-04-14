import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImovelModalComponent } from './register-imovel-modal.component';

describe('RegisterImovelModalComponent', () => {
  let component: RegisterImovelModalComponent;
  let fixture: ComponentFixture<RegisterImovelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterImovelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterImovelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
