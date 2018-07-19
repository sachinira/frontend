import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.length>0){
        if(localStorage.getItem('type')==="admin"){
          return true;
        }else{
         // console.log("form guard");
          this.router.navigate(['']);
          return false;
        }        
      }else{
        //console.log("form guard");
        this.router.navigate(['']);
        return false;
      }
  }
}
