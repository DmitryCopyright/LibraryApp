import { Component, OnInit } from '@angular/core';
import { PenaltyService } from '../penalties.service';
import { Penalty } from '../../models/penalty.model';
import { MatTableDataSource } from '@angular/material/table'

@Component({
    selector: 'app-penalties-list',
    templateUrl: './penalties-list.component.html',
    styleUrls: ['./penalties-list.component.css']
})
export class PenaltiesListComponent implements OnInit {
    dataSource = new MatTableDataSource<Penalty>();
    displayedColumns: string[] = ['penalty_id', 'reader_id', 'book_id', 'issue_date', 'debt_amount', 'actions'];

    constructor(private penaltyService: PenaltyService) {}

    ngOnInit() {
        this.getPenalties();
    }

    getPenalties(): void {
        this.penaltyService.getPenalties().subscribe(penalties => this.dataSource.data = penalties);
    }


    addPenalty(penalty: Penalty): void {
        this.penaltyService.createPenalty(penalty).subscribe(newPenalty => {
                this.dataSource.data = [...this.dataSource.data, newPenalty];
        });
    }

    updatePenalty(penalty: Penalty): void {
        this.penaltyService.updatePenalty(penalty.penalty_id, penalty).subscribe(updatedPenalty => {
            this.dataSource.data = this.dataSource.data.map(p => p.penalty_id === updatedPenalty.penalty_id ? updatedPenalty : p);
        });
    }

    deletePenalty(penaltyId: number): void {
        this.penaltyService.deletePenalty(penaltyId).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(p => p.penalty_id !== penaltyId);
        });
    }
}
