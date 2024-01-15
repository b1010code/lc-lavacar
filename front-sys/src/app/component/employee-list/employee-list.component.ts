import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [];

  subscription: Subscription | undefined;
  displayedColumns: string[] = ['id', 'name', 'office'];

  dataSource = new MatTableDataSource<Employee>([]);

  @ViewChild(MatInput, { static: true }) input: MatInput | undefined;

  applyFilter(event?: Event) {
    const filterValue = (event?.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
    console.log('Filtro aplicado:', filterValue);
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllItems().subscribe((data: any) => {
      this.employees = data;
      console.log("Funcionarios OK: ", data)
    });
  }



  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
