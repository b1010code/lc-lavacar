import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee';
import { Router } from '@angular/router';

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
  

  constructor(private formBuilder: FormBuilder, private router: Router,
    private snackBar: MatSnackBar, private employeeService:EmployeeService){
    this.emplyeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      officce: ['', [Validators.required]]      
    });
  }

  onInputChange(event: any, controlName: string) {
    const value = event.target.value.toUpperCase();
    this.emplyeeForm.get(controlName)?.setValue(value);
  }

  

  salvarItem(employee: any): void {
    this.employeeService.createItem(employee)
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
    console.log("ENVIOU OS DADOS :", this.emplyeeForm.valid );
  }

  private onSuccess() {
    this.snackBar.open("Salvo com sucesso !", '', { duration: 3000 });
  }

  private onError() {
    this.snackBar.open("Erro ao salvar.", '', { duration: 5000 });
  }

  emplist(){
    this.router.navigate(['/emplist']);
  }

}
