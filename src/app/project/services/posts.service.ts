import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddPost, GetPost } from '../components/features/Posts/models/addPostRequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl:string;
  
  constructor(private http: HttpClient) {
    this.apiUrl= environment.apiBaseUrl;
  }

    AddCategory(req:AddPost){
      const url= this.apiUrl.concat('api/posts/AddPost');
      return this.http.post(url,req);
    }

    GetAllPost(): Observable<GetPost>{
      const url= this.apiUrl.concat('api/Posts/GetAllPosts');
      return this.http.get<GetPost>(url);
    }

    GetPostById(Id:any){
      const url= this.apiUrl.concat(`api/Posts/GetPostById/${Id}`);
      return this.http.get(url);
    }

    UpdatePost(req:AddPost){
      const url= this.apiUrl.concat('api/Posts/UpdatePost');
      return this.http.put(url,req);
    }

    DeletePostById(Id:any){
      const url= this.apiUrl.concat(`api/Posts/DeletePostById/${Id}`);
      return this.http.delete(url);
    }
  }
