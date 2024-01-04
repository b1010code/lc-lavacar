import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { DataAccessService } from 'src/app/service/data-access.service';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  formData: any = {};

  customerForm!: FormGroup;
  inputvalue = "";
  form: any;
  

  constructor(private formBuilder: FormBuilder, private dataAccessService: DataAccessService,
    private snackBar: MatSnackBar){
    this.customerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      typeCar: ['', [Validators.required]],
      color: ['', [Validators.required]],
      licensePlate: ['', [Validators.required]],
    });
  }

  onInputChange(event: any, controlName: string) {
    const value = event.target.value.toUpperCase();
    this.customerForm.get(controlName)?.setValue(value);
  }

  

  salvarItem(customer: any): void {
    this.dataAccessService.createItem(customer)
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

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const formData = this.customerForm.value;
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
