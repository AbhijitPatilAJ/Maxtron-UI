import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../components/features/category/models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../components/features/category/models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string;
  constructor(private http: HttpClient) {
    this.apiUrl= environment.apiBaseUrl;
  }

  AddCategory(req:AddCategoryRequest): Observable<any>{
    const url= this.apiUrl.concat('api/Categories/AddCategory');
    return this.http.post(url,req);
  }

  GetAllCategories(): Observable<Category>{
    const url= this.apiUrl.concat('api/Categories/GetAllCategories');
    return this.http.get<Category>(url);
  }

  GetCategoryById(Id:any){
    const url= this.apiUrl.concat(`api/Categories/GetCategoryById/${Id}`);
    return this.http.get<Category>(url);
  }

  UpdateCategory(req:Category){
    const url= this.apiUrl.concat('api/Categories/UpdateCategory');
    return this.http.put(url,req);
  }

  DeleteCategoryById(Id:any){
    const url= this.apiUrl.concat(`api/Categories/DeleteCategoryById/${Id}`);
    return this.http.delete<Category>(url);
  }
}
