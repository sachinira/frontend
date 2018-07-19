import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
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
