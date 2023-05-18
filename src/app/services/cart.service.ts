import { Injectable } from '@angular/core';
import { CartItem } from 'src/types/cart';
import { MenuItem } from 'src/types/menu';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: {[item: string]: number} = {};
  
  constructor() { }

  getCartItems() {
    return this.cart;
  }

  increment(item: MenuItem) {
    this.cart[item.id]++;
  }

  decrement(item: MenuItem) {
    this.cart[item.id]--;
  }
  
}
