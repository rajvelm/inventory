import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule}  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { InventoryUploadComponent } from './inventory-upload.component';

import { InventoryUploadRoutes } from './inventory-upload.routing';

@NgModule({
imports: [
CommonModule,
RouterModule.forChild(InventoryUploadRoutes),
DragulaModule,
FormsModule,
HttpModule,
Ng2SmartTableModule],
  declarations: [InventoryUploadComponent],
 // bootstrap: [InventoryComponent]
})


export class InventoryUploadModule {}
