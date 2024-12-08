import { Injectable } from '@angular/core';
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      description: 'Description for Product 1',
      price: 19.99,
      imageUrl: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Samsung',
      description: 'Description for Product 2',
      price: 29.99,
      imageUrl: 'https://example.com/product2.jpg',
    },
    // ... more products
  ];

  constructor() {}

  getProduct(id: number) {
    return this.products.find((product: Product) => product.id === id);
  }

  addProduct(product: Product) {
    // Implement logic to add product to data source (e.g., database)
    this.products.push(product); // Update in-memory data (for example)
  }
}
