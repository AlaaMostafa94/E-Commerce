import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../../Models/icategory';
import { CategoryService } from '../../Services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-or-update-category',
  templateUrl: './add-or-update-category.component.html',
  styleUrl: './add-or-update-category.component.css'
})
export class AddOrUpdateCategoryComponent implements OnInit {
  selectedCategoryId:number=0
AddCategoryForm:FormGroup
category: ICategory = {} as ICategory

errMsg:string=''

constructor(private categoryService:CategoryService,private router:Router,private activatedRoute:ActivatedRoute){
  this.AddCategoryForm=new FormGroup({
    name:new FormControl('',[Validators.required])
  })
}

get categoryName() {
  return this.AddCategoryForm.get('name')
}

SaveCategory(){
  if(this.selectedCategoryId==0){
this.category={ id: 0, name: this.categoryName?.value }
this.categoryService.AddNewCategory(this.category).subscribe({
  next:()=>{
         console.log('Done')
      this.router.navigate(['/Admin/Categories/AllCategories'])
  },
  error:(err)=>{  
         this.errMsg=this.categoryService.errorMessage
         console.log(err)
  }
})
  }
  else{
    this.category={id:this.selectedCategoryId,name:this.categoryName?.value }
    this.categoryService.EditCategory(this.selectedCategoryId, this.category).subscribe(
      {
        next: () => {
          console.log(this.category)
          this.router.navigateByUrl('/Admin/Categories/AllCategories')

        },
        error: (err) => { console.log(err) }
      }
    )
  }

}


initializeErrMsg(){
  this.errMsg=''
}

ngOnInit(): void {
  this.selectedCategoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'))
  console.log(this.selectedCategoryId)
  if(this.selectedCategoryId !=0){
    this.categoryService.getCategoryById(this.selectedCategoryId).subscribe({
      next:(res)=>{
        this.category=res
        console.log(this.category)
      },
      error:(err)=>{console.log(err)}
    })
  }

}
}
