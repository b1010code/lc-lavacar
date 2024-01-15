import { Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { DataAccessService } from 'src/app/service/data-access.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  /* id: string;
     name: string | null;
     typeCar: string | null;
     color: string | null;
     licensePlate: string | null; */

  customers: any[] = [];
  subscription: Subscription | undefined;
  displayedColumns: string[] = ['id', 'name', 'typeCar', 'color', 'licensePlate'];

  dataSource = new MatTableDataSource<Customer>([]);

  @ViewChild(MatInput, { static: true }) input: MatInput | undefined;

  applyFilter(event?: Event) {
    const filterValue = (event?.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
    console.log('Filtro aplicado:', filterValue);
  }


  constructor(private dataAccessService: DataAccessService){}

  ngOnInit(): void {
    this.dataAccessService.getAllItems().subscribe((data: any) => {
      this.customers = data;
      console.log("Clientes OK: ", data)
    });
  }



  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
