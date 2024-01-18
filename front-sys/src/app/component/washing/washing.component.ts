import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/service/data-access.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { WashingService } from 'src/app/service/washing.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


interface washing {
  value: string;
  viewValue: string;
}

interface auto {
  valauto: string;
  viewauto: string;
}


@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.scss']
})
export class WashingComponent implements OnInit {
  selectedWashing: string = '';
  selectedAuto: string = '';

  washes: washing[] = [
    { value: 'washing-0', viewValue: 'Lavação Simples' },
    { value: 'washing-1', viewValue: 'Lavação Premium' },
  ];

  autos: auto[] = [
    { valauto: 'auto-0', viewauto: 'Carro' },
    { valauto: 'auto-1', viewauto: 'SUV' },
    { valauto: 'auto-2', viewauto: 'Camionete' },
    { valauto: 'auto-3', viewauto: 'Moto' },
  ];

  customer: any[] = [];
  employee: any[] = [];
  priceSimple: any[] = [];

  selectedCustomer: any = null;
  selectedEmployee: any = null;

  currentDate: string = '';
  currentTime: string = '';

  constructor(private dataAccess: DataAccessService, private employessService: EmployeeService,
    private washingServive: WashingService) {
    this.getCurrentTime();
  }

  getCurrentTime() {
    const now = new Date();
    this.currentDate = format(now, "dd/MM/yyyy HH:mm", { locale: ptBR });
  }

  ngOnInit(): void {
    this.getAllRegisters();
    this.getAllEmployee();
    this.getAllPrices();
  }

  getAllRegisters() {
    this.dataAccess.getAllItems().subscribe((data: any) => {
      this.customer = data;
    });
  }

  getAllEmployee() {
    this.employessService.getAllItems().subscribe((data: any) => {
      this.employee = data;
    });
  }

  getAllPrices() {
    this.washingServive.getAllItems().subscribe((data: any) => {
      this.priceSimple = data;
      console.log("Preços :", data)
    });
  }

  onCustomerSelected(customer: any) {
    this.selectedCustomer = customer;
  }

  onEmployeeSelected(employee: any) {
    this.selectedEmployee = employee;
  }

}
