import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';
import { AllUser } from '../../home/all_user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dchome',
  templateUrl: './dchome.component.html',
  styleUrls: ['./dchome.component.css']
})
export class DchomeComponent implements OnInit {

  qid:string;
  patients:AllUser[]=[];

  onepatient:AllUser=new AllUser();
  level:string;

  constructor(private service:CouncellerService,private router:Router) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");
    this.service.get_patients(this.qid).subscribe(
      data=>{
       
       data['out'].forEach(element => {
         this.patients.push(element);
       });
       
        
      }
    )

  }

  onSelectPt(id:string){
    this.service.get_patient_details(this.qid,id).subscribe(
      data=>{
        console.log(data);
        
        this.onepatient.name = data['name'];
        this.onepatient.address=data['address'];
        this.onepatient.birth_date=data['birth_date'];
        this.onepatient.email=data['email'];
        this.onepatient.gender=data['gender'];
        this.onepatient.phone_number=data['phone_number'];
        this.onepatient.job=data['job'];
        this.level=data['stress_level'];
        
      },
      err=>{
        console.log(err);
        
      }
    )

    
  }

  onPressChat(id:string){

    localStorage.setItem("chatC","id");
    this.router.navigate(['/dashboard/dchat']);
  }

  //patient list the array don't have the name . this will be like booking list
  //from this patient details can be viewed and chat with them

}
