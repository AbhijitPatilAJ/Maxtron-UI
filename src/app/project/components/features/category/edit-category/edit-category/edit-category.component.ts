import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/project/services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {
  CategoryId:string | null=null;
  EditCatSubscription?:Subscription;
  categoryDoesntExist:boolean=false;
  category:any;
  categoryModel:Category;

  constructor(private router:Router, private route:ActivatedRoute, public catService:CategoryService, ) {  
    this.categoryModel ={
      Id:'',
      Name:'',
      urlHandle:''
    };
  }
  ngOnDestroy(): void {
    this.EditCatSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result=>{
      this.CategoryId= result.get('id');
    })
    this.CategoryId ? this.EditCatSubscription = this.catService.GetCategoryById(this.CategoryId).subscribe((result:any)=>{
      if(result.id == this.CategoryId){  
      this.category = result;
      this.categoryModel.Id =result.id;
      this.categoryModel.Name= result.name;
      this.categoryModel.urlHandle=result.urlHandle;
      this.categoryDoesntExist = true;
      };
    })
     : this.categoryDoesntExist = false;
  }

  UpdateCategory(){
    this.EditCatSubscription = this.catService.UpdateCategory(this.categoryModel).subscribe(result => {
        this.router.navigate(['app/admin/categories']);
      });
    }
  }

