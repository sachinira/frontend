import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';

@Component({
  selector: 'app-dchome',
  templateUrl: './dchome.component.html',
  styleUrls: ['./dchome.component.css']
})
export class DchomeComponent implements OnInit {

  qid:string;

  constructor(private service:CouncellerService) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");
    this.service.get_patients(this.qid).subscribe(
      data=>{
        console.log(data);
        
      }
    )

  }

  onSelectPt(id:string){
    this.service.get_patient_details(this.qid,id).subscribe(
      data=>{
        console.log(data);
        
      },
      err=>{
        console.log(err);
        
      }
    )

    
  }

}
