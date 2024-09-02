import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  prdID: number = 0
  product: IProduct = {} as IProduct
  constructor(private activatedRoute: ActivatedRoute, private prdService: ProductService) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => this.prdID = Number(paramMap.get('prodId')))
    console.log(this.prdID)
    this.prdService.GetProductById(this.prdID).subscribe({
      next: (res) => { this.product = res },
      error: (err) => { console.log(err) }
    })
  }

}
