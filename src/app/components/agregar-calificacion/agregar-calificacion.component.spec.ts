import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCalificacionComponent } from './agregar-calificacion.component';

describe('AgregarCalificacionComponent', () => {
  let component: AgregarCalificacionComponent;
  let fixture: ComponentFixture<AgregarCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCalificacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
