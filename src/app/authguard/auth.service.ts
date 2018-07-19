import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  getUserLogStatus(){
    if(localStorage.getItem("tok").length>0){
       if(localStorage.getItem('type')=="user"){
         return true;
       }else{
         return false;
       }
    } else{
      return false;
    }
 }
 
 getCouncellerLogStatus(){
   if(localStorage.getItem("tok").length>0){
      if(localStorage.getItem('type')=="counceller"){
        return true;
      }else{
        return false;
      }
   } else{
     return false;
   }
 }

 getAdminLogStatus(){
   if(localStorage.getItem("tok").length>0){
      if(localStorage.getItem('type')=="admin"){
        return true;
      }else{
        return false;
      }
   } else{
     return false;
   }
 }
}
