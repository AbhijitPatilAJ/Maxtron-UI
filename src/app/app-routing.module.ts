import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './project/components/features/category/category-list/category-list.component';
import { AddCategoryComponent } from './project/components/features/category/add-category/add-category.component';
import { EditCategoryComponent } from './project/components/features/category/edit-category/edit-category/edit-category.component';
import { PostsListComponent } from './project/components/features/Posts/posts-list/posts-list.component';
import { AddPostComponent } from './project/components/features/Posts/add-post/add-post.component';
import { EditPostComponent } from './project/components/features/Posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path:'',
    component: PostsListComponent
  },
  {
    path:'app/admin/categories',
    component: CategoryListComponent
  },
  {
    path:'app/admin/add-category',
    component: AddCategoryComponent
  },
  {
    path:'app/admin/edit-category/:id',
    component: EditCategoryComponent
  },
  {
    path:'app/admin/posts/view',
    component: PostsListComponent
  },
  {
    path:'app/admin/posts/add',
    component: AddPostComponent
  },
  {
    path:'app/admin/posts/edit/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
