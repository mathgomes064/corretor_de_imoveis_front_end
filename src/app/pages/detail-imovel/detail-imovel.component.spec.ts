import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImovelComponent } from './detail-imovel.component';

describe('DetailImovelComponent', () => {
  let component: DetailImovelComponent;
  let fixture: ComponentFixture<DetailImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
