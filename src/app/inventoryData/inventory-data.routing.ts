import { Routes } from '@angular/router';

import { InventoryDataComponent } from './inventory-data.component';

export const InventoryDataRoutes: Routes = [{
  path: '',
  component: InventoryDataComponent,
  data: {
    heading: 'Inventory',
    removeFooter: true
  }
}];
