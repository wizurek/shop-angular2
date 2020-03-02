import {Injectable} from '@angular/core';
import {Product} from './shop/products/Product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() {
  }

  private products: Product[] = [
    {id: 0, name: 'Product_1', price: 10.00, quantity: 100, available: true},
    {id: 1, name: 'Product_2', price: 50.00, quantity: 200, available: false},
  ];

  private idCount: number = 2;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

  saveProduct(product: Product) {
    if (product.id) {
      const productIndex = this.products.findIndex(p => p.id === product.id);
      this.products[productIndex] = product;
    } else {
      product.id = this.idCount;
      this.products.push(product);
      this.idCount++;
    }
  }

  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    return {...this.products[productIndex]};
  }
}
