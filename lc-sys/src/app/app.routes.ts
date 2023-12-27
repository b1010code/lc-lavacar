import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { MaterialComponent } from './component/material/material.component';
import { WashingComponent } from './component/washing/washing.component';
import { CleaningComponent } from './component/cleaning/cleaning.component';
import { FooterComponent } from './component/footer/footer.component';
import { CustomersComponent } from './component/customers/customers.component';
import { EmployeesComponent } from './component/employees/employees.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },  
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'washing', component: WashingComponent },
    { path: 'cleaning', component: CleaningComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'employees', component: EmployeesComponent },
 ];

 