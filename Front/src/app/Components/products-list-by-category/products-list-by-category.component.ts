import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-products-list-by-category',
  templateUrl: './products-list-by-category.component.html',
  styleUrl: './products-list-by-category.component.css'
})
export class ProductsListByCategoryComponent implements OnChanges,OnInit{
  @Input() selectedCategoryId:number=0
  prdList:IProduct[]=[]
constructor(private productService:ProductService, private dataService:DataService){
 
}


filterProducts(){
if(this.selectedCategoryId==0){
  this.productService.GetAllProducts().subscribe({
    next: (res)=>{this.prdList=res},
    error: (err)=>{console.log(err)}
  })
}
else{
this.productService.GetProductsByCategoryId(this.selectedCategoryId).subscribe({
  next: (res)=>{this.prdList=res},
  error: (err)=>{console.log(err)}
})
}
}

addToCart(prd:IProduct,quantity:string){
  this.dataService.pushToProductList(prd,Number(quantity));
  console.log(this.dataService.map);
  }


  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.filterProducts()
    console.log(this.prdList)
  }
}
