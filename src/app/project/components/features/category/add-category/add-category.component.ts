import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from 'src/app/project/services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit , OnDestroy {

  categoryModel:AddCategoryRequest;
  private addCategorSubscription?: Subscription;

  constructor(public catService:CategoryService, private router: Router) {
    this.categoryModel ={
      name:'',
      urlHandle:''
    };
   }
  ngOnDestroy(): void {
   this.addCategorSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    
  }


  AddCategory(){
     this.addCategorSubscription = this.catService.AddCategory(this.categoryModel).subscribe({
        next:(response:AddCategoryRequest)=>{
          this.router.navigate(['app/admin/categories']);
        },
        error:(error) =>{

        }
      })
  }
}
