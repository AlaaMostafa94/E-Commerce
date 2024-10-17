import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/iproduct';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { ConfirmDeleteProductDialogComponent } from '../confirm-delete-product-dialog/confirm-delete-product-dialog.component';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  prdList: IProduct[] = []
  constructor(private productService: ProductService, private router: Router, public dialog: MatDialog) { }

  goToProductDetails(prdId: number) {
    this.router.navigateByUrl(`/Admin/Products/AllProducts/${prdId}`)
  }


  goToProductEdit(prdId: number) {
    this.router.navigateByUrl(`/Admin/Products/EditProduct/${prdId}`)
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, prdId: number): void {
    this.dialog.open(ConfirmDeleteProductDialogComponent, {
      data: { productId: prdId },
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration

    })


  }

  ngOnInit(): void {
    
    console.log('prd list onInit....')
    this.productService.GetAllProducts().subscribe(
      {
        next: (res) => {
          this.prdList = res
          console.log(this.prdList)
        },
        error: (err) => { console.log(err) }
      }
    )
  }



}
