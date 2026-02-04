import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalificacionComponent } from '../../components/calificacion/calificacion.component';

@Component({
  selector: 'app-calificaciones',
  imports: [
    RouterLink
  ],
  templateUrl: './calificaciones.component.html',
  styleUrl: './calificaciones.component.css'
})
export class CalificacionesComponent {
    public calificaciones = signal<CalificacionComponent[]>([]);

    public eliminar(matricula: string) {
      this.calificaciones.update(v => v.filter(c => c.matricula() === matricula))
    }

    public guardar(matricula: string, nombre: string, corte1: number, corte2: number, corte3: number) {
      this.calificaciones.update(v => {
        const found = v.findIndex(c => c.matricula() === matricula);
        v[found].matricula.set(matricula);
        v[found].nombre.set(nombre);
        v[found].corte1.set(corte1);
        v[found].corte2.set(corte2);
        v[found].corte3.set(corte3);

        return v;
      })
    }
}
