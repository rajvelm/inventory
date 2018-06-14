import { Component} from "@angular/core";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { single, multi } from '../shared/chartData';

@Component({
  selector :'app-inventory-data',
  templateUrl :'./inventory-data.component.html',
  styleUrls:['./inventory-data.component.css']
})
export class InventoryDataComponent{
  single: any[];
multi: any[];

closeResult: string;

// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = false;
showXAxisLabel = true;
tooltipDisabled = false;
xAxisLabel = 'Period';
showYAxisLabel = true;
yAxisLabel = 'Users';
showGridLines = true;
innerPadding = 0;
barPadding = 8;
groupPadding = 16;
roundDomains = false;
maxRadius = 10;
minRadius = 3;

colorScheme = {
  domain: [
    '#0099cc', '#2ECC71', '#4cc3d9'
  ]
};
schemeType = 'ordinal';
  constructor(private modalService: NgbModal) {

    Object.assign(this, {
    single,
    multi
  });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

}
