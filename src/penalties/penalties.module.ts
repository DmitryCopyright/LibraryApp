import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenaltiesRoutingModule } from './penalties-routing.module';
import { PenaltiesListComponent } from './penalties-list/penalties-list.component'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { PenaltyService } from './penalties.service'


@NgModule({
  declarations: [PenaltiesListComponent],
    imports: [
        CommonModule,
        PenaltiesRoutingModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
    ],
  providers: [PenaltyService]
})
export class PenaltiesModule { }
