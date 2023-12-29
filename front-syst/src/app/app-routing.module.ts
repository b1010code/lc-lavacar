import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },  
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
