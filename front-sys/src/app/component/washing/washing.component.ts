import { Component, OnInit } from '@angular/core';
import { DataAccessService } from 'src/app/service/data-access.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { WashingService } from 'src/app/service/washing.service';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { catchError, tap } from 'rxjs';


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

 
  customer: any[] = [];
  employee: any[] = [];
  selectedCustomer: any = null;
  selectedEmployee: any = null;
  currentDate: string = '';
  currentTime: string = '';
  washingForm!: FormGroup;


  constructor(private dataAccess: DataAccessService, private employessService: EmployeeService,
    private washingService: WashingService, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    
    this.washingForm = this.formBuilder.group({
      dateTime: [format(new Date(), "dd/MM/yyyy HH:mm", { locale: ptBR }), [Validators.required]],
      employee:  ['', [Validators.required]],
      washingType:  ['', [Validators.required]],
      vehicleType:  ['', [Validators.required]],
      price:  ['', [Validators.required]],
      customer: ['', [Validators.required]],
      typeCar: ['', [Validators.required]],
      color: ['', [Validators.required]],
      licensePlate: ['', [Validators.required]],
      observations: ['', [Validators.required]],
    });
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
    this.washingForm.get('vehicleType')?.reset(); 
    this.washingForm.get('price')?.reset(); 
    console.log('Tipo de Lavação selecionado:', this.washingForm.get('washingType')?.value);
}

onVehicleTypeChange() {
    if (this.washingForm.get('washingType')?.value && this.washingForm.get('vehicleType')?.value) {
        this.washingForm.get('price')?.setValue(
            this.prices[this.washingForm.get('washingType')?.value][this.washingForm.get('vehicleType')?.value]
        );
    } else {
        this.washingForm.get('price')?.reset();
    }

    console.log('Tipo de Veículo selecionado:', this.washingForm.get('vehicleType')?.value);
    console.log('Preço selecionado:', this.washingForm.get('price')?.value);
}

onCustomerSelected(event: any) {
  const selectedIndex = event.target.selectedIndex;
  this.selectedCustomer = this.customer[selectedIndex];

  this.washingForm.patchValue({
    typeCar: this.selectedCustomer?.typeCar,
    color: this.selectedCustomer?.color,
    licensePlate: this.selectedCustomer?.licensePlate,
  });
}

  onEmployeeSelected(employee: any) {
    this.selectedEmployee = employee;
  }

  salvarItem(washing: any): void {
    this.washingService.createItem(washing)
      .pipe(
        tap((data: any) => {
          this.onSuccess();
        }),
        catchError((error: any) => {
          this.onError();
          throw error;
        })
      )
      .subscribe();
  }


  onSubmit() {
    if (this.washingForm.valid) {
      const formData = this.washingForm.value;
      this.salvarItem(formData);
    }
  }

  private onSuccess() {
    this.snackBar.open("Salvo com sucesso !", '', { duration: 3000 });
  }

  private onError() {
    this.snackBar.open("Erro ao salvar.", '', { duration: 5000 });
  }

}
