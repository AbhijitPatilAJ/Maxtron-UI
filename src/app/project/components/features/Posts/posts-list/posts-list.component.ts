import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostsService } from 'src/app/project/services/posts.service';
import { GetPost } from '../models/addPostRequest.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  postList?:Subscription;
  posts:any;
  postsAvailable:boolean=false;

  constructor(private router:Router, private postsServie:PostsService) { }
  ngOnDestroy(): void {
    this.postList?.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllPost();
    this.postsAvailable = this.posts ? true : false;
  }

  AddPost(){
    this.router.navigateByUrl('app/admin/posts/add');
  }

  getAllPost(){
    this.postList = this.postsServie.GetAllPost().subscribe((result)=>{
      this.posts=result;
    });
  }

  editPost(id:any){
      this.router.navigateByUrl(`app/admin/posts/edit/${id}`);
    }

    DeletePostById(Id:any){
      this.postList = this.postsServie.DeletePostById(Id).subscribe(result =>{
        this.getAllPost();
      });
    }
}
