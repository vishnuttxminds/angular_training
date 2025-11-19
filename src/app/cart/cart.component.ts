import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products = [
    { id: 1, name: 'Laptop', price: 55000 },

    { id: 2, name: 'Smartphone', price: 25000 },

    { id: 3, name: 'Headphones', price: 3000 },

    { id: 4, name: 'Keyboard', price: 1200 },
  ];

  getPriceCategory(price: number): string {
    if (price < 5000) return 'AFFO';
    else if (price > 50000) return 'EXPE';
    else return 'NORM';
  }

  getPriceCategoryStyle(price: number) {
    if (price < 5000) {
      return { color: 'green' };
    } else if (price > 50000) {
      return { color: 'red' };
    } else {
      return { color: 'orange' };
    }
  }
  
}
