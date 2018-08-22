import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-prof',
  templateUrl: './admin-user-prof.component.html',
  styleUrls: ['./admin-user-prof.component.css']
})
export class AdminUserProfComponent implements OnInit {

  cid:any;
  address:string;
  age:any;
  birth_date:string;
  certificate:string;
  email:string;
  gender:string;
  latitude:string;
  longitude:string;
  name:string;
  phone_number:string;
  qualification:string;
  status:string;
  id:string;
  admin_id:any;


  userid:string;

  constructor(private adminServices:AdminService,private router:Router) { }

  ngOnInit() {


    this.userid = localStorage.getItem("userid");
    console.log(this.userid);

    this.adminServices.getCouncellerData(this.userid).subscribe(
         (data)=>{
            console.log(data);
            this.id=data['id'];
            this.name=data['name'];
            this.email=data['email'];
            this.gender=data['gender'];
            this.address=data['address'];
            this.phone_number=data['phone_number'];
            this.birth_date=data['birth_date'];
            this.certificate=data['certificate'];
            this.qualification=data['qualification'];
            this.status=data['status'];


            if(data['status']=="disable"){
                  document.getElementById('enable').style.display="block";

            }else{
              document.getElementById('disable').style.display="block";
            }
          }
    )


   

  
  }


 

  accessCtrl(){
   
    this.admin_id=localStorage.getItem("id");
    if(this.status=='enable'){

      this.adminServices.accessControl(this.admin_id,this.id,"disable").subscribe(
          data=>{
            if(data['status']="success"){
              document.getElementById('enable').style.display="block";
              document.getElementById('disable').style.display="none";

              document.getElementById('enablewrn').style.display="block";
              document.getElementById('disablewrn').style.display="none";
            }
          }
      )
      this.ngOnInit();
     
    }else{

      this.adminServices.accessControl(this.admin_id,this.id,"enable").subscribe(
        data=>{
          if(data['status']="success"){
            document.getElementById('enable').style.display="none";
            document.getElementById('disable').style.display="block";

            document.getElementById('enablewrn').style.display="none";
            document.getElementById('disablewrn').style.display="block";

          }
        }
    )
    this.ngOnInit();
    }
   
  }



  delete(cid:any,sta:string){
    var t = confirm("Do you really want to Delete?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,cid,"delete").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(cid+"dltbtn").style.display = "none";
                document.getElementById(cid+"dlt").style.display = "block";
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
       
    }  
   
  }

}
