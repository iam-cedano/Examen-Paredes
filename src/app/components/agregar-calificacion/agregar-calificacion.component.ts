import { Component, effect, input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-calificacion',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-calificacion.component.html',
  styleUrl: './agregar-calificacion.component.css'
})
export class AgregarCalificacionComponent {
  calificacionForm: FormGroup;

  public calificacionSeleccionada = input<any>(null);
  public agregarAlumno = output<any>();

  constructor(private fb: FormBuilder) {
    this.calificacionForm = this.fb.group({
      matricula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      corte1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      corte2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      corte3: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });

    effect(() => {
      const data = this.calificacionSeleccionada();
      if (data) {
        this.calificacionForm.patchValue(data);
      }
    });
  }

  onSubmit() {
    if (this.calificacionForm.valid) {
      this.agregarAlumno.emit(this.calificacionForm.value);
    } else {
      Object.keys(this.calificacionForm.controls).forEach(key => {
        this.calificacionForm.get(key)?.markAsTouched();
      });
    }
  }

  onNuevo() {
    this.calificacionForm.reset();
  }
}
