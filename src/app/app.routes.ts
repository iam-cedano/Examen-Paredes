import { Routes } from '@angular/router';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';

export const routes: Routes = [
    {
        path: '',
        component: DatosGeneralesComponent
    },
    {
        path: 'calificaciones',
        component: CalificacionesComponent
    },
    {
        path: 'datos-generales',
        component: DatosGeneralesComponent
    }
];
