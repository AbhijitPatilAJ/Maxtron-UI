import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './project/components/navbar/navbar.component';
import { CategoryListComponent } from './project/components/features/category/category-list/category-list.component';
import { AddCategoryComponent } from './project/components/features/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCategoryComponent } from './project/components/features/category/edit-category/edit-category/edit-category.component';
import { PostsListComponent } from './project/components/features/Posts/posts-list/posts-list.component';
import { AddPostComponent } from './project/components/features/Posts/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    PostsListComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
