import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnChanges,OnInit {

  @Input() CategoryId:number=0
productsList:IProduct[]=[]
  constructor(private prdService:ProductService){}

getProducts(){
  if(this.CategoryId==0){
this.prdService.GetAllProducts().subscribe({
  next:(res)=>{
    this.productsList=res
    console.log(this.productsList)
  },
  error:(err)=>{console.log(err)}  
})
  }
  else{
    this.prdService.GetProductsByCategoryId(this.CategoryId).subscribe({
      next:(res)=>{
        this.productsList=res
        console.log(this.productsList)
      },
      error:(err)=>{console.log(err)}
    })
  }

}


  ngOnInit(): void {
    console.log(this.CategoryId)
  }


  ngOnChanges(): void {
    this.getProducts()
    }

}
