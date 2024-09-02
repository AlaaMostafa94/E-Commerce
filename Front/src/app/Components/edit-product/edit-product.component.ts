import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';
import { CategoryService } from '../../Services/category.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit {
  selectedProdID: number = 0
  selectedPrd: IProduct = {} as IProduct
  categoryList: ICategory[] = []
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService, private categoryService: CategoryService) { }

  saveChanges() {
    this.productService.EditProduct(this.selectedProdID, this.selectedPrd).subscribe(
      {
        next: () => {
          console.log(this.selectedPrd)
          this.router.navigateByUrl('/Admin/Products/ProductList')

        },
        error: (err) => { console.log(err) }
      }
    )
  }



  ngOnInit(): void {
    this.selectedProdID = Number(this.activatedRoute.snapshot.paramMap.get('prdId'))
    console.log(this.selectedProdID)
    this.productService.GetProductById(this.selectedProdID).subscribe({
      next: (res) => { this.selectedPrd = res },
      error: (err) => { console.log(err) }
    })

    this.categoryService.getAllCategories().subscribe({
      next: (res) => { this.categoryList = res },
      error: (err) => { console.log(err) }
    })
  }

}
