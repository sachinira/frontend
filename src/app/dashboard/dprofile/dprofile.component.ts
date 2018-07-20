import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AllUser } from '../../home/all_user';

@Component({
  selector: 'app-dprofile',
  templateUrl: './dprofile.component.html',
  styleUrls: ['./dprofile.component.css']
})
export class DprofileComponent implements OnInit {

  user:AllUser=new AllUser();
  nuser:AllUser = new AllUser();
  qid:string;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");
    this.service.getData(this.qid).subscribe(
      (data)=>{
        this.user.name = data['name'];
        this.user.type = data['type'];
        this.user.address=data['address'];
      }
    )
  }

  changeSettings(){
    console.log(this.nuser);
    
    this.service.account_setting(this.nuser).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

}
