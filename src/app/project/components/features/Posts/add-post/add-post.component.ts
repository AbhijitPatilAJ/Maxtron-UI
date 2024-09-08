import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddPost } from '../models/addPostRequest.model';
import { PostsService } from 'src/app/project/services/posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/project/services/category.service';
import { Category } from '../../category/models/category.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit, OnDestroy {

  addPostRequest=new AddPost();
  addPostSub?:Subscription;
  categories:any =[];

  constructor(private postService: PostsService, private router: Router, private cat: CategoryService) { }
  
  ngOnDestroy(): void {
    this.addPostSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  AddPost(){
    console.log(this.addPostRequest);
    this.addPostSub = this.postService.AddCategory(this.addPostRequest).subscribe(result=>{
      this.router.navigateByUrl('app/admin/posts/view');
    });
  }

  getAllCategories(){
     this.cat.GetAllCategories().subscribe(result=>{
      this.categories = result;
    });
  }
}
