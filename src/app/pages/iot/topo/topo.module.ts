import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopoRoutingModule, routedComponents } from './topo-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    TopoRoutingModule,
  ],
  exports: [

  ],
})
export class TopoModule { }
