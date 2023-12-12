import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansListComponent } from './loans-list/loans-list.component'

const routes: Routes = [
  { path: 'loans', component: LoansListComponent },
  // Дополнительные маршруты для других компонентов в модуле loans
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
