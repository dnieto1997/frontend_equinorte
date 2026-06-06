import { Routes } from '@angular/router';
import { FacturaConsultaComponent } from './components/factura-consulta/factura-consulta.component';
import { RecalculoFacturaComponent } from './components/recalculo-factura/recalculo-factura.component';
import { FacturaResultadoComponent } from './components/factura-resultado/factura-resultado.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'consulta',
    pathMatch: 'full'
  },
  {
    path: 'consulta',
    component: FacturaConsultaComponent
  },
  {
    path: 'recalculo',
    component: RecalculoFacturaComponent
  },
  {
    path: 'resultado',
    component: FacturaResultadoComponent
  },
  {
    path: '**',
    redirectTo: 'consulta'
  }
];