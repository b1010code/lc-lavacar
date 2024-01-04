import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/service/data-access.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.scss']
})
export class WashingComponent implements OnInit {

  customer: any[] = [];
  selectedCustomer: any = null;
  currentDate: string = '';
  currentTime: string = '';

  constructor(private dataAccess: DataAccessService){
    this.getCurrentTime();
  }
 
  getCurrentTime() {
    const now = new Date();    
    this.currentDate = format(now, "dd/MM/yyyy HH:mm", { locale: ptBR });
  }
 
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
