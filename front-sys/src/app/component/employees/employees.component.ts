import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataAccessService } from 'src/app/service/data-access.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  formData: any = {};

  emplyeeForm!: FormGroup;
  inputvalue = "";
  form: any;
  

  constructor(private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar, private dataAccessService:DataAccessService){
    this.emplyeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      typeCar: ['', [Validators.required]],
      color: ['', [Validators.required]],
      licensePlate: ['', [Validators.required]],
    });
  }

  onInputChange(event: any, controlName: string) {
    const value = event.target.value.toUpperCase();
    this.emplyeeForm.get(controlName)?.setValue(value);
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
    if (this.emplyeeForm.valid) {
      const formData = this.emplyeeForm.value;
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
