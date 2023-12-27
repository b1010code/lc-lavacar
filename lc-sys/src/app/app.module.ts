import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { CleaningComponent } from './component/cleaning/cleaning.component';
import { MaterialService } from './service/material.service';
import { MaterialComponent } from './component/material/material.component';
import { MenuComponent } from './component/menu/menu.component';
import { WashingComponent } from './component/washing/washing.component';
import { FooterComponent } from './component/footer/footer.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    CleaningComponent,
    MaterialComponent,
    MenuComponent,
    WashingComponent,
    FooterComponent
  ],
  providers:[MaterialService]
})
export class AppModule { }
