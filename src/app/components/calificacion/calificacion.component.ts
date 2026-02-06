import { Component, input, output } from '@angular/core';

@Component({
  selector: '[app-calificacion]',
  imports: [],
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.css'
})
export class CalificacionComponent {
  public matricula = input<string>('');
  public nombre = input<string>('');
  public corte1 = input<number>(0);
  public corte2 = input<number>(0);
  public corte3 = input<number>(0);

  public onEliminar = output<string>();
  public onSeleccionar = output<string>();

  eliminar() {
    this.onEliminar.emit(this.matricula());
  }

  seleccionar() {
    this.onSeleccionar.emit(this.matricula());
  }
}
