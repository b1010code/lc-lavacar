import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/service/data-access.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { WashingService } from 'src/app/service/washing.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';


@Component({
  selector: 'app-washing',
  templateUrl: './washing.component.html',
  styleUrls: ['./washing.component.scss']
})
export class WashingComponent implements OnInit {
  
  washes: any[] = ['LAVAÇÃO SIMPLES', 'LAVAÇÃO PREMIUM'];
  vehicles: any[] = ['CARRO', 'SUV', 'CAMIONETE', 'MOTO'];
  prices: any = {};
  datas: any[] = [];

  selectedWashing: any = null;
  selectedVehicle: any = null;
  selectedPrice: any = null;

  customer: any[] = [];
  employee: any[] = [];
  

  selectedCustomer: any = null;
  selectedEmployee: any = null;

  currentDate: string = '';
  currentTime: string = '';

  constructor(private dataAccess: DataAccessService, private employessService: EmployeeService,
    private washingService: WashingService) {
    this.getCurrentTime();
  }

  getCurrentTime() {
    const now = new Date();
    this.currentDate = format(now, "dd/MM/yyyy HH:mm", { locale: ptBR });
    console.log('currentDate:', this.currentDate);
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
    this.washingService.getAllItems().subscribe((data: any) => {
      this.datas = data;
      this.populatePrices();
      console.log("Preços :", data);
    });
  }

  populatePrices() {
    this.prices = {};

    for (const entry of this.datas) {
      if (!this.prices[entry.formattedWashingType]) {
        this.prices[entry.formattedWashingType] = {};
      }
      this.prices[entry.formattedWashingType][entry.formattedVehicleType] = entry.formattedPrice;
    }
  }

  onWashingTypeChange() {
    this.selectedVehicle = null;
    this.selectedPrice = null;
    console.log('Tipo de Lavação selecionado:', this.selectedWashing);
  }
  
  onVehicleTypeChange() {
    if (this.selectedWashing && this.selectedVehicle) {
      this.selectedPrice = this.prices[this.selectedWashing][this.selectedVehicle];
    } else {
      this.selectedPrice = null;
    }
    console.log('Tipo de Veículo selecionado:', this.selectedVehicle);
    console.log('Preço selecionado:', this.selectedPrice);
  }

  onCustomerSelected(customer: any) {
    this.selectedCustomer = customer;
  }

  onEmployeeSelected(employee: any) {
    this.selectedEmployee = employee;
  }

}
