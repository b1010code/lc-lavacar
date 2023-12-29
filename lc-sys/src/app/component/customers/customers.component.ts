import { Component, OnInit } from '@angular/core';
import { DataAccessService } from '../../service/data-access.service';
import { Customer } from '../../model/customer';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-customers',    
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

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
