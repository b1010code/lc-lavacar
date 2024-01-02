import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router){}

  home(){
    this.router.navigate(['/home']);
  }

  customer(){
    this.router.navigate(['/customer']);
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

  restaurant(){
    this.router.navigate(['/restaurant']);
  }



}
