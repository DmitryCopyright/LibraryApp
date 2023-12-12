import { Loan } from '../../models/loan.model'
import { Component, OnInit } from '@angular/core'
import { LoanService } from '../loans.service'


@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {

  loans: Loan[] | undefined;

  constructor(private loanService: LoanService) {}

  ngOnInit() {
    this.getLoans();
  }

  getLoans(): void {
    this.loanService.getLoans()
      .subscribe(loans => this.loans = loans);
  }

  // Методы для новой выдачи, обновления и удаления выдачи
  addLoan(newLoan: Loan): void {
    this.loanService.createLoan(newLoan)
      .subscribe(loan => this.loans?.push(loan));
  }

  updateLoan(loan: Loan): void {
    this.loanService.updateLoan(loan.loan_id, loan)
      .subscribe(updatedLoan => {
        if (this.loans) {
          const index = this.loans.findIndex(l => l.loan_id === loan.loan_id);
          if (index !== -1) {
            this.loans[index] = updatedLoan;
          }
        }
      });
  }

  deleteLoan(loanId: number): void {
    this.loanService.deleteLoan(loanId)
      .subscribe(() => {
        this.loans = this.loans?.filter(loan => loan.loan_id !== loanId);
      });
  }
}
