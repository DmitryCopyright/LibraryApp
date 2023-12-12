import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenaltiesListComponent } from './penalties-list/penalties-list.component'

const routes: Routes = [
  { path: 'penalties', component: PenaltiesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenaltiesRoutingModule { }
