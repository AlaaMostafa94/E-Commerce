import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit {
categoryID:number=0
category:ICategory={} as ICategory
constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoryService){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => this.categoryID = Number(paramMap.get('categoryId')))
    console.log(this.categoryID)
    this.categoryService.getCategoryById(this.categoryID).subscribe({
      next: (res)=>{
        this.category=res
        console.log(this.category)

      },
      error: (err)=>{console.log(err)}
    })

  }
}
