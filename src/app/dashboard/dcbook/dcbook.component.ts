import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Booking } from './booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dcbook',
  templateUrl: './dcbook.component.html',
  styleUrls: ['./dcbook.component.css']
})
export class DcbookComponent implements OnInit {


  qid:string;
  bookingsnotc:Booking[] = [];
  bookingsnotcu:Booking[] =[];
  bookingsc:Booking[] = [];

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");

    this.service.bookingHistory(this.qid).subscribe(
      data =>{
        console.log(data);
        data['data'].forEach(element => {
          if(element.bookingStatus == 'counceller not confirmed'){
            this.bookingsnotc.push(element);
          }
          else if(element.bookingStatus == 'user not confirmed'){
            this.bookingsnotcu.push(element);
          }
          else if(element.bookingStatus == 'booked'){
            this.bookingsc.push(element);
          }
          
        });
        
      },
      err =>{
        console.log(err);
        
      }
    );

    if(localStorage.getItem("type")== "user"){
      document.getElementById("btn").style.display = 'none';
    }


  }

  goToConfirm(id:string){
    localStorage.setItem("reqid",id);
    
    this.router.navigate(['/dashboard/dcbookingres']);
    
  }

}
