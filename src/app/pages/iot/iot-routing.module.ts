import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { IotComponent } from './iot.component';

const routes: Routes = [{
  path: '',
  component: IotComponent,
  children: [
    {
      path: 'topo',
      loadChildren: () => import('./topo/topo.module')
        .then(m => m.TopoModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IotRoutingModule {
}
