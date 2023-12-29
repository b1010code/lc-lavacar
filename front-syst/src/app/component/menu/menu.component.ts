import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
