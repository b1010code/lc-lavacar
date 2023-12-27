import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../share/material.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router: Router){}

  home(){
    this.router.navigate(['/home']);
  }

  customers(){
    this.router.navigate(['/customers']);
  }

  washing(){
    this.router.navigate(['/washing']);
  }

  cleaning(){
    this.router.navigate(['/cleaning']);
  }

  material(){
    this.router.navigate(['/material']);
  }

  employees(){
    this.router.navigate(['/employees']);
  }



  
  
}
