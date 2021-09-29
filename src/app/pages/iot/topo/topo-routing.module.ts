import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopoComponent } from './topo.component';
import { TopoListComponent } from './topo-list/topo-list.component';
import { TopoEditorComponent } from './topo-editor/topo-editor.component';
import { TopoPreviewComponent } from './topo-preview/topo-preview.component';
import { TopoStageComponent } from './topo-stage/topo-stage.component';

const routes: Routes = [{
    path: '',
    component: TopoComponent,
    children: [
        {
            path: 'topo-list',
            component: TopoListComponent,
        },
        {
            path: 'topo-editor',
            component: TopoEditorComponent,
        },
        {
            path: 'topo-preview',
            component: TopoPreviewComponent,
        },
        {
            path: 'topo-state',
            component: TopoStageComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TopoRoutingModule { }

export const routedComponents = [
    TopoComponent,
    TopoListComponent,
    TopoEditorComponent,
    TopoPreviewComponent,
    TopoStageComponent,
];
