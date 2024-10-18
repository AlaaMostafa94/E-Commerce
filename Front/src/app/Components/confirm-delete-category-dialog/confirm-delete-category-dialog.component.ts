import { Component, Inject } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-delete-category-dialog',
  templateUrl: './confirm-delete-category-dialog.component.html',
  styleUrl: './confirm-delete-category-dialog.component.css',
  providers:[MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent]

})
export class ConfirmDeleteCategoryDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteCategoryDialogComponent>,private categoryService:CategoryService,@Inject(MAT_DIALOG_DATA) private data: any,private router:Router){}
  deleteItem(){
    this.categoryService.DeleteCategory(this.data.categoryId).subscribe({
      next:()=>{console.log('Deleted')
      
    this.router.navigateByUrl('/Admin/Categories/AllCategories')},
      error:(err)=>{console.log(err)}
    })

  }
}
