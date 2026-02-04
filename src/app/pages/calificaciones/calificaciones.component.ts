import { Component } from '@angular/core';
import { AgregarCalificacionComponent } from '../../components/agregar-calificacion/agregar-calificacion.component';

@Component({
  selector: 'app-calificaciones',
  imports: [
    AgregarCalificacionComponent
  ],
  templateUrl: './calificaciones.component.html',
  styleUrl: './calificaciones.component.css'
})
export class CalificacionesComponent {

}
