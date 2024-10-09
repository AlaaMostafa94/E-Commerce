import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Models/icategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css'
})
export class AllCategoriesComponent implements OnInit {
  categoryList:ICategory[]=[]
constructor(private categoryService: CategoryService,private router:Router){}

goToCategoryDetails(categoryId:number){
this.router.navigateByUrl(`/Admin/Categories/AllCategories/${categoryId}`)
}

  ngOnInit(): void {
this.categoryService.getAllCategories().subscribe({
  next : (res)=>{
    this.categoryList=res
  },
  error: (err)=>{
    console.log(err)
  }
}
)
  }

}
