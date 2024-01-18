import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { WashingComponent } from './component/washing/washing.component';
import { CleaningComponent } from './component/cleaning/cleaning.component';
import { MaterialComponent } from './component/material/material.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { CustomerComponent } from './component/customer/customer.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { WashtestComponent } from './component/washtest/washtest.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },  
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'washing', component: WashingComponent },
  { path: 'washtest', component: WashtestComponent },
  { path: 'cleaning', component: CleaningComponent },
  { path: 'material', component: MaterialComponent },    
  { path: 'customer', component: CustomerComponent },
  { path: 'cust-list', component: CustomerListComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'emplist', component: EmployeeListComponent },
  { path: 'restaurant', component: RestaurantComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
