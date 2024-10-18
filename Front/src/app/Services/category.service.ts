import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  errorMessage='Error occured , Try again'

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.ApiUrl}/api/Categories`)
  }

  getCategoryById(categoryId: number): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${environment.ApiUrl}/api/Categories/${categoryId}`)
  }

  AddNewCategory(category: ICategory) {
    return this.httpClient.post(`${environment.ApiUrl}/api/Categories`, category)
  }



  EditCategory(id: number, category: ICategory) {
    return this.httpClient.put(`${environment.ApiUrl}/api/Categories/${id}`, category)
  }

  DeleteCategory(id: number) {
    return this.httpClient.delete(`${environment.ApiUrl}/api/Categories/${id}`)
  }
}
