import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl:string = 'http://206.189.89.19:8081/api';
  httpOptions = {

    headers: new HttpHeaders().set('Content-Type','application/json').append('Authorization',localStorage.getItem("tok")).append('id',localStorage.getItem("id"))

  };
  constructor(private http:HttpClient) { }


realtime(id:string){
    return this.http.post(this.baseUrl+'/realtime',{id},this.httpOptions);
  }
  
  getData(id:string){
  console.log(this.httpOptions);
  return this.http.post(this.baseUrl+'/getData',{id},this.httpOptions);
}
  
getUserDetail(userType:string){
  return this.http.post(this.baseUrl+'/admin/getUsersDetails',{userType},this.httpOptions);
}

accessControl(admin_id:any,controller_id:any,status:string){
  return this.http.post(this.baseUrl+'/admin/accessControll',{admin_id,controller_id,status},this.httpOptions);
}


getCouncellerData(id:string){
    return this.http.post(this.baseUrl+'/admin/getDetails',{id},this.httpOptions);
}

getUsage(id:string){
  return this.http.post(this.baseUrl+'/admin/getUsage'+{id},this.httpOptions);
}

}
