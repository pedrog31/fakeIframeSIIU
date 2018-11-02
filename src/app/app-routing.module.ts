import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreacionPropuestaComponent} from './creacion-propuesta/creacion-propuesta.component';
const routes: Routes = [
  {path: '', component: CreacionPropuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
