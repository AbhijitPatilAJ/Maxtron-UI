export class AddPost {
      Title:string ='';
      ShortDescription : string='';
      Content : string='';
      FeaturedImageUrl : string='';
      UrlHandle : string='';
      PublishedDate : Date= new Date();
      Author : string='';
      IsVisible : boolean = true;
}

export interface GetPost {
      Id:String;
      Title:string;
      ShortDescription : string;
      Content : string;
      FeaturedImageUrl : string;
      UrlHandle : string;
      PublishedDate : Date;
      Author : string;
      IsVisible : boolean ;
}