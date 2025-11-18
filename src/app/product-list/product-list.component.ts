import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  name: string = 'iPhone 5';
  price: number = 999
  color: string = 'Green';
  offerPrice: number = 899;

  productDetails = {
    name: this.name,
    price: this.price,
    color: this.color,
    offerPrice: this.offerPrice,
    image: '/assets/images/iphone.jpg'
  }

}
