import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // productList:IProduct[]=[]
  map = new Map<IProduct, number>()

  constructor() { }

  pushToProductList(product: IProduct, quantity: number) {
    if (quantity <= 0) {
      this.map.delete(product)


    }
    else {
      this.map.set(product, quantity)
 
    }

  }

}
