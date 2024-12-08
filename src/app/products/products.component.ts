import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from './products.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  productForm!: FormGroup;
  newProduct: Product = {
    id: 0, // Set a temporary ID (update later)
    name: '',
    description: '',
    price: 0,
  };

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.products;
  }

  getDetails(product: Product) {
    this.router.navigate(['/products', product?.id], { state: product });
  }

  addProduct() {
    console.log('Adding product:', this.newProduct);
    //   this.newProduct.id = this.products.length + 1;
    //   this.productsService.addProduct(this.newProduct);
    //   this.products.push(this.newProduct);
    //   this.newProduct = {
    //     id: 0,
    //     name: '',
    //     description: '',
    //     price: 0,
    //   };
  }
}
