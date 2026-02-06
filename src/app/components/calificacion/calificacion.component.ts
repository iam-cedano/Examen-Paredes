import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  imports: [],
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.css'
})
export class CalificacionComponent {
  public matricula = signal<string>('');
  public nombre = signal<string>('');
  public corte1 = signal<number>(0);
  public corte2 = signal<number>(0);
  public corte3 = signal<number>(0);  
}
