import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-councell',
  templateUrl: './admin-councell.component.html',
  styleUrls: ['./admin-councell.component.css']
})
export class AdminCouncellComponent implements OnInit {

  disableCouncellers:any;
  enablecouncellers:any;
  councellernames:any;
  admin_id:any;
  controller_id:any;
  status:string;
  cidbtn:any;

  disable:boolean=true;

  constructor(private adminServices:AdminService,private router:Router) { }


  ngOnInit() {

    this.adminServices.getUserDetail('counceller').subscribe(
      data=>{
       
        this.disableCouncellers=data['disableCouncellrs'];
        this.enablecouncellers=data['enableCouncellrs'];
        console.log(data);
        
      }
    )

   

    
  }


  accessControldisable(cid:any,sta:string){
    var t = confirm("Do you really want to Disable?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,cid,"disable").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(cid+"bt").style.display = "none";
                document.getElementById(cid).style.display = "block";
                
  
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
         
    }  
  
    
  }

  accessControlenable(cid:any,sta:string){
    var t = confirm("Do you really want to enable?");     
    if(t == true)  
    {  
      this.admin_id=localStorage.getItem("id")
      this.adminServices.accessControl(this.admin_id,cid,"enable").subscribe(
          data=>{
  
              if(data['status']="success"){
                document.getElementById(cid+"bt").style.display = "none";
                document.getElementById(cid).style.display = "block";
            
              }
  
              console.log(data);
          }
      );
    }  
    else  
    {  
       
    }  
   
  }
  


  View(cid:any){
    localStorage.setItem("councellerid",cid);

    this.router.navigate(['/admin/acouncellerprof']);
  }
}
