import { Injectable } from '@angular/core';
import { AllUser } from '../home/all_user';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  user:AllUser;

  private baseUrl:string = 'http://206.189.89.19:8081/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  newhttpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json').append('Authorization',localStorage.getItem("tok")).append('id',localStorage.getItem("id"))
    
  };


  imageHeaders = {
    headers: new HttpHeaders().set('Content-Type','multipart/form-data').append('id',localStorage.getItem("id")).append('Authorization',localStorage.getItem("tok"))
  }

  private origUrl:string = 'http://206.189.89.19:8081/org';

  constructor(private http:HttpClient) { }


  get_signin(username:string,password:string){
    return this.http.post(this.origUrl+'/signin',{username,password});
  }

  get_signup(user:AllUser){
    console.log(JSON.stringify(user));
    return this.http.post(this.origUrl+'/signup',JSON.stringify(user),this.httpOptions);
  }

  change_profile_pic(name:string){
    return this.http.post(this.baseUrl+'/ChangeProfilePicture',name);
  }

  getuser(){
    return this.user;
  }

  forgot_password(email:string){
    return this.http.post(this.origUrl+'/foggotPassword',JSON.stringify(email),this.httpOptions);
  }
  

  post_image(fileToUpload:File,id:string){
    const formData = new FormData();
    formData.append('Image',fileToUpload,fileToUpload.name);

    return this.http.post(this.baseUrl+'/uploadPicture',{formData,id},this.imageHeaders);
  }

  get_image(id:string):Observable<any>{

      return this.http.post(this.baseUrl+'/getImage',{id},this.newhttpOptions);
  }

  popular_councellers(){
    return this.http.post(this.baseUrl+'/LatestCouncellersIds',{});
  }
}
