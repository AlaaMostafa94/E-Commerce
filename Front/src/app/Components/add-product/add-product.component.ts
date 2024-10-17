import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Models/icategory';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';
import { retry } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  categoryList: ICategory[] = []
  newProduct: IProduct = {} as IProduct
  AddProductForm: FormGroup;
  errMsg:string=''
  constructor(private categoryService: CategoryService, private prdService: ProductService, private router: Router) {
    this.AddProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      availableQuantity: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      categoryID: new FormControl('', [Validators.required])

    })
  }

  get prdName() {
    return this.AddProductForm.get('name')
  }

  get prdQuantity() {
    return this.AddProductForm.get('availableQuantity')
  }

  get prdPrice() {
    return this.AddProductForm.get('price')
  }

  get prdCategory() {
    return this.AddProductForm.get('categoryID')
  }

  get prdDescription() {
    return this.AddProductForm.get('description')
  }

  get prdImage() {
    return this.AddProductForm.get('image')
  }
  initializeErrMsg(){
    this.errMsg=''
  }
  SaveProduct() {
    this.newProduct = { id: 0, name: this.prdName?.value, availableQuantity: this.prdQuantity?.value, categoryID: this.prdCategory?.value, price: this.prdPrice?.value, description: this.prdDescription?.value, image: this.prdImage?.value }
    this.prdService.AddNewProduct(this.newProduct).subscribe({

      next: () => {
        console.log('Done')
        this.router.navigate(['/Admin/Products/AllProducts'])
      },
      error: (err) => {
         this.errMsg=this.prdService.errorMessage
        // console.log('errormsg:'+this.errMsg)
        // console.log(err)
        
      }

    })
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => { this.categoryList = res },
      error: (err) => { console.log(err) }
    })
  }

}
