import { Routes } from '@angular/router';

import { InventoryUploadComponent } from './inventory-upload.component';

export const InventoryUploadRoutes: Routes = [{
  path: '',
  component: InventoryUploadComponent,
  data: {
    heading: 'Inventory',
    removeFooter: true
  }    
}];
