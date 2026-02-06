import { Component, signal } from '@angular/core';
import { CalificacionComponent } from '../../components/calificacion/calificacion.component';
import { AgregarCalificacionComponent } from '../../components/agregar-calificacion/agregar-calificacion.component';

export interface Calificacion {
  matricula: string;
  nombre: string;
  corte1: number;
  corte2: number;
  corte3: number;
}

@Component({
  selector: 'app-calificaciones',
  imports: [
    AgregarCalificacionComponent,
    CalificacionComponent
  ],
  templateUrl: './calificaciones.component.html',
  styleUrl: './calificaciones.component.css'
})
export class CalificacionesComponent {
    public calificaciones = signal<Calificacion[]>([]);
    public calificacionSeleccionada = signal<Calificacion | null>(null);

    public agregar(cal: Calificacion) {
      this.calificaciones.update(v => {
        const index = v.findIndex(c => c.matricula === cal.matricula);
        if (index !== -1) {
          const updated = [...v];
          updated[index] = cal;
          return updated;
        }
        return [...v, cal];
      });
    }

    public eliminar(matricula: string) {
      this.calificaciones.update(v => v.filter(c => c.matricula !== matricula));
    }

    public seleccionar(matricula: string) {
      const found = this.calificaciones().find(c => c.matricula === matricula);
      if (found) {
        this.calificacionSeleccionada.set({ ...found });
      }
    }
}
