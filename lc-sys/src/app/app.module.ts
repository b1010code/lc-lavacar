import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './share/material.module';
import { MaterialService } from './service/material.service';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { WashingComponent } from './component/washing/washing.component';
import { CleaningComponent } from './component/cleaning/cleaning.component';
import { MaterialComponent } from './component/material/material.component';
import { CustomersComponent } from './component/customers/customers.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { DataAccessService } from './service/data-access.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    WashingComponent,
    CleaningComponent,
    MaterialComponent,
    EmployeesComponent,
    CustomersComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MaterialService, DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
