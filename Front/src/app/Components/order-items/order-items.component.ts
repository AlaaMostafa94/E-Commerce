import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrl: './order-items.component.css'
})
export class OrderItemsComponent implements OnInit {
  map = new Map<IProduct, number>()

  constructor(private dataService: DataService) { }

  TotalQuantityPrice(quantity: number, unitPrice: number) {
    return quantity * unitPrice
  }

  calculateTotalOrderPrice() {
   let totalOrderPrice: number = 0

    for (let [key, value] of this.map) 
      {
        totalOrderPrice += key.price * value
      }
    return totalOrderPrice

  }
  ngOnInit(): void {
    this.map = this.dataService.map
  }

}
