import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule}  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryDataComponent } from './inventory-data.component';

import { InventoryDataRoutes } from './inventory-data.routing';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
imports: [
CommonModule,
RouterModule.forChild(InventoryDataRoutes),
DragulaModule,
FormsModule,
HttpModule,
Ng2SmartTableModule, NgxChartsModule, NgbModule],
  declarations: [InventoryDataComponent],
 // bootstrap: [InventoryComponent]
})


export class InventoryDataModule {}
