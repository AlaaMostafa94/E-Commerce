import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-test-angular-material',
  templateUrl: './test-angular-material.component.html',
  styleUrl: './test-angular-material.component.css'
})
export class TestAngularMaterialComponent {
prdList:IProduct[]=[]
constructor(private dataService:DataService){
  this.prdList=[
    {id:1,name:'test 1',availableQuantity:4,categoryID:1,description:'qqqqqqqqq',price:10000,image:''},
    {id:2,name:'test 2',availableQuantity:7,categoryID:2,description:'qqqqqqqqq',price:20000,image:''},
    {id:3,name:'test 3',availableQuantity:3,categoryID:5,description:'qqqqqqqqq',price:10500,image:''},
    {id:4,name:'test 4',availableQuantity:8,categoryID:1,description:'qqqqqqqqq',price:1000,image:''},
    {id:5,name:'test 5',availableQuantity:3,categoryID:3,description:'qqqqqqqqq',price:100000,image:''},
    {id:6,name:'test 6',availableQuantity:4,categoryID:8,description:'qqqqqqqqq',price:9000,image:''},
    {id:7,name:'test 7',availableQuantity:9,categoryID:2,description:'qqqqqqqqq',price:3000,image:''},
    {id:8,name:'test 8',availableQuantity:2,categoryID:1,description:'qqqqqqqqq',price:70000,image:''},
    {id:9,name:'test 9',availableQuantity:6,categoryID:3,description:'qqqqqqqqq',price:20000,image:''},
    {id:10,name:'test 10',availableQuantity:5,categoryID:1,description:'qqqqqqqqq',price:10000,image:''},
  ]
}


addToCart(prd:IProduct,quantity:string){
this.dataService.pushToProductList(prd,Number(quantity));
console.log(this.dataService.map);
}

}
