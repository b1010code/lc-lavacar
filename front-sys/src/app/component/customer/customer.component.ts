import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { DataAccessService } from 'src/app/service/data-access.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  formData: any = {};

  customerForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private dataAccessService: DataAccessService){}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      typeCar: ['', [Validators.required]],
      color: ['', [Validators.required]],
      licensePlate: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const customerData = this.customerForm.value;
    const customer: Customer = {
      id: '',
      name: customerData.name || '',
      typeCar: customerData.typeCar || '',
      color: customerData.color || '',
      licensePlate: customerData.licensePlate || ''
    };
  
    this.dataAccessService.createItem(customer)
      .subscribe({
        next: response => {
          console.log('Customer created successfully:', response);
        },
        error: error => {
          console.error('Error creating customer:', error);
        }
      });
  }  

}
