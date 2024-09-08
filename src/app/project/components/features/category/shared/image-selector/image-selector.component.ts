import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { PostsService } from 'src/app/project/services/posts.service';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
  private File?:File;
  fileName:string='';
  title:string='';

  @Output() uploaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private post:PostsService) { } 
  ngOnInit(): void {
  }

  onFileUploadChange(event:Event){

    const element = event.currentTarget as HTMLInputElement;
    this.File = element.files?.[0];
  }
  uploadImage(){
    if(this.fileName != '' && this.File && this.title !='')
    {
      this.post.UploadImage(this.File, this.fileName,this.title).subscribe(result => {
        if(result==true){
          this.uploaded.emit(true);
        }
      });
    }
  }
}
