import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansListComponent } from './loans-list/loans-list.component'
import { LoanService } from './loans.service'

@NgModule({
  declarations: [LoansListComponent],
  imports: [
    CommonModule
  ],
  providers: [LoanService]
})
export class LoansModule { }
