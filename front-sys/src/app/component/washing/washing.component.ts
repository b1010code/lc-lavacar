import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/service/data-access.service';

@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.scss']
})
export class WashingComponent implements OnInit {

  customer: any[] = [];
  selectedCustomer: any = null;

  constructor(private dataAccess: DataAccessService){}
 
 
  ngOnInit(): void {
    this.getAllRegisters();
  }

  getAllRegisters(){
    this.dataAccess.getAllItems().subscribe((data: any) => {
      this.customer = data;       
      console.log("REGISTRADOS", data)
    });
  }

  onCustomerSelected(customer: any) {
    this.selectedCustomer = customer;
  }

}
