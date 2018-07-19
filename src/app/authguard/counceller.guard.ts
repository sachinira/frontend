import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouncellerGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.length>0){
        if(localStorage.getItem('type')==="counceller"){
          return true;
        }else{
          this.router.navigate(['']);
          return false;
        }        
      }else{
       // console.log("form guard");
        this.router.navigate(['']);
        return false;
      }
  }
}
