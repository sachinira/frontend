import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AllUser } from './all_user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  councellers:AllUser[]=[];

  constructor(private service:HomeService,private router:Router) { }

  ngOnInit() {

    this.service.popular_councellers().subscribe(
      data=>{

        console.log(data);
        
        data['data'].forEach(element => {
         this.councellers.push(element);
          
        });
      }
    )

    if(localStorage.length>0){
      if(localStorage.getItem('type')=="user"){
       this.router.navigate(['/dashboard/dhome']);
      }else if(localStorage.getItem('type')=="counceller"){
       this.router.navigate(['/dashboard/dchome']);
      }else{
       this.router.navigate(['/admin']);
      }
    

    }
    else{
     this.router.navigate(['']);
    }
    
  }

  showhiddensignup1(){
    var x = document.getElementById("ccounceller");
    var y = document.getElementById("cuser");
    
  
    x.style.display = "block";
   
    y.style.display="none"
  
  
  }
   showhiddensignup2(){
    var x = document.getElementById("ccounceller");
    var y = document.getElementById("cuser");
    
    x.style.display="none";
    y.style.display="block";
  
  
  }



}
