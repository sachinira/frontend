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

  msuccess:boolean;
  merror:boolean;

  bsuccess:boolean;
  berror:boolean;

  success:string;
  error:string;

  nocounceller:boolean;
  message:string;

  /*for hiding and showing button*/
  booked=false;

  /*This value must be the users location*/
  lat=6.0242533;
  lng=80.2424114;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

    
    this.qid = localStorage.getItem("id");
    this.name = localStorage.getItem("name");

    
    //in real system this must be the user's latitude and logitude

  /*  this.lat =parseFloat(localStorage.getItem("lati"));
    this.lng = parseFloat(localStorage.getItem("longi"));*/

    this.service.get_all_councellers().subscribe(
      (data)=>{
        console.log(data);
      
        data['list'].forEach(element => {
         // console.log(element);
          this.councellers.push(element);
          this.councellers[this.index].lat = parseFloat(element.latitude);
         // console.log(this.clats);
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

        if(this.mycouncellers.length==0){
          this.nocounceller=true;
          this.message='You Have no councellers mapped yet';
        }
      },
      (err)=>{
        console.log(err);
        this.nocounceller = true;
        this.message='You have no councellers mapped yet';
        
      }
    );
  }


  onPressSelect(id:string){
    var r = confirm("Select this counceller?");

    if(r){
      this.service.map_counceller(this.qid,id).subscribe(
        (res)=>{
          
          if(res['res_status'] == "success"){
            this.success = res['response'];
            this.msuccess=true;
            document.getElementById(id+"m").style.display="block";
            document.getElementById(id+"btm").style.display="none";
          }
          else{
            this.error = res['response'];
            this.merror=true;
            document.getElementById(id+"me").style.display="block";
          }

          
          //this.onBookedCounceller();
        },
        (err)=>{
           
          this.error = err['error'].response;
          this.merror=true;
          document.getElementById(id+"me").style.display="block";
          console.log(err);
        }
      );
    }
    //every time when this is selected the method get the current counceller must be called.
    //or show an error msg
  }

  onPressBook(id:string){
    var r = confirm("Book this counceller?")

    if(r){
      this.service.booking_request(this.qid,id).subscribe(
        (res)=>{
         
          if(res['res_status']== "success"){
            this.success = res['response'];
            this.bsuccess=true;
            document.getElementById(id+"b").style.display="block";
            document.getElementById(id+"btb").style.display="none";
          
          }
          else{
            this.error = res['response'];
            this.berror=true;
            document.getElementById(id+"be").style.display="block";
          }
        },
        (err)=>{
         
          this.error = err['error'].response;
          this.berror=true;
          document.getElementById(id+"be").style.display="block";
          console.log(err);
        }
      );
    }
  }


  onPressBookMapped(id:string){
    var r = confirm("Book this counceller?")

    if(r){
      this.service.booking_request(this.qid,id).subscribe(
        (res)=>{
         
          if(res['res_status']== "success"){
            this.success = res['response'];
           
            document.getElementById(id+"bm").style.display="block";
       
          
          }
          else{
            this.error = res['response'];
            document.getElementById(id+"bme").style.display="block";
           
          }
        },
        (err)=>{
         
          this.error = err['error'].response;
          document.getElementById(id+"bme").style.display="block";
          console.log(err);
        }
      );
    }
  }
 /* onPressDelete(){
    //this is for deleting a request made by user;
    //get the current userid
    //get the id of the request send, this must be saved in alist of requests made by the user,
    var r = confirm("Delete this counceller?")

    if(r){
      this.service.delete_request(this.qid,this.reqid).subscribe(
        (res)=>{
          this.okd=true;
          this.success = res['response'];
          
          console.log(res);
          //this.onBookedCounceller();
        },
        (err)=>{
          this.okd=false;
          this.error = err['error'].error;
          console.log(err);
        }
      );
    }

  }*/

  deleteCounceller(id:string){

    var r = confirm("Delete this counceller?");
    if(r){
    this.service.delete_counceller(this.qid,id).subscribe(
      res=>{
        if(res['res_status']== "success"){
          this.success = res['response'];
          document.getElementById(id+"ds").style.display="block";
          //document.getElementById(id+"del").style.display="none";
        
        }
        else{
          this.error = res['response'];
          document.getElementById(id+"dse").style.display="block";
         
        }
      },
      err=>{

        this.error = err['error'].response;
        document.getElementById(id+"dse").style.display="block";
        console.log(err);
      }
    );

  }
  }



  onPressChat(id:string){
    localStorage.setItem("chatC","id");
    this.router.navigate(['/dashboard/dchat']);
  }




  //handling problem in the for loop errors
  //showing response in map
  //booking history

 
}
