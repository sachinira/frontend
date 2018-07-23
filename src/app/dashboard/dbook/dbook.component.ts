import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AllUser } from '../../home/all_user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbook',
  templateUrl: './dbook.component.html',
  styleUrls: ['./dbook.component.css']
})
export class DbookComponent implements OnInit {
  qid:string;
  //cid:string="2";
  councellers:AllUser[] = [];
  mycouncellers:AllUser[]=[];
  clats:number[] = [];
  clons:number[] = [];
  name:string;
  index=0;
  reqid:string;


  /*for hiding and showing button*/
  booked=false;

  /*This value must be the users location*/
  lat=6.0242533;
  lng=80.2424114;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");
    this.name = localStorage.getItem("name");

    this.service.get_all_councellers().subscribe(
      (data)=>{
        console.log(data);
      
        data['list'].forEach(element => {
          console.log(element);
          this.councellers.push(element);
          this.councellers[this.index].lat = parseFloat(element.latitude);
          console.log(this.clats);
          this.councellers[this.index].lon =parseFloat(element.longitude);
          this.index++;
        });
      },
      (err)=>{
        console.log(err);
      }

    );

    this.service.get_mapped_councellers(this.qid).subscribe(
      (data)=>{

        console.log(data);
        
        data['councellers'].forEach(element => {

          console.log(data);
          
          this.mycouncellers.push(element);
          
        });
      },
      (err)=>{
        console.log(err);
        
      }
    );
  }


  onPressSelect(id:string){
    this.service.map_counceller(this.qid,id).subscribe(
      (res)=>{
        console.log(res);
        //this.onBookedCounceller();
      },
      (err)=>{
        console.log(err);
      }
    );

    //every time when this is selected the method get the current counceller must be called.
    //or show an error msg
  }

  onPressBook(id:string){
    this.service.booking_request(this.qid,id).subscribe(
      (res)=>{
        console.log(res);
        this.booked=true;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  onPressDelete(){
    //this is for deleting a request made by user;
    //get the current userid
    //get the id of the request send, this must be saved in alist of requests made by the user,

    this.service.delete_request(this.qid,this.reqid).subscribe(
      (req)=>{
        console.log(req);
      },
      (err)=>{
        console.log(err);
        
      }
    );


  }



  onPressChat(id:string){
    localStorage.setItem("chatC","id");
    this.router.navigate(['/chat']);
  }

  goBack(){
    this.router.navigate(['/user']);
  }
}
