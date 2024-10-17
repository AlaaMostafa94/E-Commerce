import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete-product-dialog',
  templateUrl: './confirm-delete-product-dialog.component.html',
  styleUrl: './confirm-delete-product-dialog.component.css',
  providers:[MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent]
})
export class ConfirmDeleteProductDialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteProductDialogComponent>,@Inject(MAT_DIALOG_DATA) private data: any,private productService:ProductService,private router:Router) {
  }

  deleteItem(){
    this.productService.DeleteProduct(this.data.productId).subscribe({
      next:()=>{console.log('Deleted')
      
    this.router.navigateByUrl('/Admin/Products/AllProducts')},
      error:(err)=>{console.log(err)}
    })

  }
  ngOnInit(): void {
    console.log(this.data.productId)

  }



}
