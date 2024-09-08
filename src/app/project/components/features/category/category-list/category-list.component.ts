import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/project/services/category.service';
import { Category } from '../models/category.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  catogeries:any;
  private listCategory?:Subscription;

  constructor(public catService:CategoryService, private router:Router) { }
  
  ngOnDestroy(): void {
    this.listCategory?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  EditCategory(Id:any){
        this.router.navigateByUrl(`app/admin/edit-category/${Id}`);
      }
  

  DeleteCategory(Id:any){
    this.listCategory = this.catService.DeleteCategoryById(Id).subscribe(result =>{
      this.getAllCategories();
    });
  }

  getAllCategories(){
    this.listCategory = this.catService.GetAllCategories().subscribe((result)=>{
      this.catogeries=result;
    })
  }
}
