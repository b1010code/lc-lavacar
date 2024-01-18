import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './share/material.module';
import { WashingComponent } from './component/washing/washing.component';
import { MenuComponent } from './component/menu/menu.component';
import { MaterialComponent } from './component/material/material.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { CleaningComponent } from './component/cleaning/cleaning.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { DataAccessService } from './service/data-access.service';
import { CustomerComponent } from './component/customer/customer.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { WashingService } from './service/washing.service';
import { WashtestComponent } from './component/washtest/washtest.component';

@NgModule({
  declarations: [
    AppComponent,
    WashingComponent,
    MenuComponent,
    MaterialComponent,
    HomeComponent,
    FooterComponent,
    EmployeesComponent,   
    CleaningComponent,
    RestaurantComponent,
    CustomerComponent,
    EmployeeListComponent,
    CustomerListComponent,
    WashtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataAccessService, WashingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
