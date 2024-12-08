import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      imageUrl: 'https://example.com/product2.jpg',
    },
    // ... more products
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getProductDetails() {
    this.router.navigate(['products', 1]);
  }
}
