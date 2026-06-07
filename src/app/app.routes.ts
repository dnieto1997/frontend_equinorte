import { Routes } from '@angular/router';
import { FacturaConsultaComponent } from './components/factura-consulta/factura-consulta.component';
import { RecalculoFacturaComponent } from './components/recalculo-factura/recalculo-factura.component';


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
    path: '**',
    redirectTo: 'consulta'
  }
];