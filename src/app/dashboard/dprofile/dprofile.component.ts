import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AllUser } from '../../home/all_user';
import { AccountUser } from '../../home/account_user';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {

  user:AllUser=new AllUser();
  nuser:AccountUser = new AccountUser();
  qid:string;
  isuser:boolean;

  success:string;
  error:string;

  ok:boolean=null;
  

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

  
    
    this.qid = localStorage.getItem("id");
    this.service.getData(this.qid).subscribe(
      (data)=>{
        this.user.name = data['name'];
        this.user.type = localStorage.getItem("type");
        this.user.address=data['address'];
        this.user.birth_date=data['birth_date'];
        this.user.phone_number=data['phone_number'];
        this.user.guadiant_phone_number=data['guadiant_phone_no'];
        this.user.job=data['job'];
        this.user.certificate=data['certificate'];
        this.user.qualification=data['qualification'];
       
        console.log(data);

        if(data['type']== "user"){
          this.isuser = true;
        }
        else{
          this.isuser=false;
        }
        
      }
    )
  }

  changeSettings(){
    console.log(this.nuser);
    this.nuser.id = localStorage.getItem("id");
    
    this.service.account_setting(this.nuser).subscribe(
      (data)=>{
        console.log(data['response']);
        if(data['res_status'] == "success"){
          this.ok =true;
          this.success= data['response'];
        }
        else{
          this.ok=false;
          this.error = data['response']
        }
        this.ngOnInit();
        
      },
      (err)=>{
        console.log(err);
        this.ok=false;
        this.error=err['response'];
        
      }
    )
  }

  //the response always comes as unauthorized chek it with postman
  //image upload in profile

}
