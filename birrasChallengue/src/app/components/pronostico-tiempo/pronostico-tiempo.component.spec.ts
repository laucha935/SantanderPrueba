import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronosticoTiempoComponent } from './pronostico-tiempo.component';

describe('PronosticoTiempoComponent', () => {
  let component: PronosticoTiempoComponent;
  let fixture: ComponentFixture<PronosticoTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronosticoTiempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronosticoTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
