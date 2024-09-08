import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/project/services/category.service';
import { PostsService } from 'src/app/project/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postId:any;
  EditCatSubscription?:Subscription;
  postData:any;
  categories:any;
  selectedCategories:any;
  isImageSelectorVisible:boolean=false;
  @Input() uploaded: any;
  constructor(private router:Router, private route:ActivatedRoute, private post: PostsService, private cat: CategoryService) { }


  ngOnDestroy(): void {
    this.EditCatSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(result=>{
      this.postId= result.get('id');
    })
    this.getAllCategories();
    this.postId ? this.EditCatSubscription = this.post.GetPostById(this.postId).subscribe((result:any)=>{
      if(result.id == this.postId){  
      this.postData = result;
      this.selectedCategories = result.categories?.map((x:any)=>x.id);
      };
    }) : "";
  }

  getAllCategories(){
    this.EditCatSubscription = this.cat.GetAllCategories().subscribe(result=>{
     this.categories = result;
   });
  }
   savePost(){
    this.postData.categories = this.selectedCategories;
    this.EditCatSubscription = this.post.UpdatePost(this.postData).subscribe(result => {
      this.router.navigateByUrl("app/admin/posts/view");
    });
   }

   openImageselector(){
    this.isImageSelectorVisible = true;
     }
     closeImageselector(){
      this.isImageSelectorVisible = false;
     }

     ImageUploaded(event:any) {
      console.log(event);
      this.isImageSelectorVisible = !event;
     }
}
