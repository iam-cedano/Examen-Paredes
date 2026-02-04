import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-calificacion',
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-calificacion.component.html',
  styleUrl: './agregar-calificacion.component.css'
})
export class AgregarCalificacionComponent {
  calificacionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.calificacionForm = this.fb.group({
      matricula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      corte1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      corte2: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      corte3: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  onSubmit() {
    if (this.calificacionForm.valid) {
      console.log('Datos válidos:', this.calificacionForm.value);
      // Aquí puedes procesar los datos
    } else {
      console.log('Formulario inválido');
      // Marcar todos los campos como tocados para mostrar los errores
      Object.keys(this.calificacionForm.controls).forEach(key => {
        this.calificacionForm.get(key)?.markAsTouched();
      });
    }
  }
}
