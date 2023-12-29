
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cleaning',  
  templateUrl: './cleaning.component.html',
  styleUrl: './cleaning.component.scss'
})
export class CleaningComponent  {
  products: Product[] = [
    { name: 'Produto 1', price: 10 },
    { name: 'Produto 2', price: 20.50 },
    { name: 'Produto 3', price: 15.25 },
    { name: 'Produto 4', price: 25 },
    { name: 'Produto 5', price: 30 },
    { name: 'Produto 6', price: 12 }
  ];

  total = 0;

  updateTotal(event: Event, price: number) {
    const target = event.target as HTMLInputElement;
    if (target && target.checked !== undefined) {
      if (target.checked) {
        this.total += price;
      } else {
        this.total -= price;
      }
    }
  }
  }


