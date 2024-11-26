import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent implements OnInit {
  categoryList: ICategory[] = []
  selectedCategory: number = 0
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe({
      next: (res) => { this.categoryList = res },
      error: (err) => { console.log(err) }
    })
  }

}
