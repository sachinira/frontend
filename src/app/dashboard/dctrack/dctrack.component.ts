import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';

@Component({
  selector: 'app-dctrack',
  templateUrl: './dctrack.component.html',
  styleUrls: ['./dctrack.component.css']
})
export class DctrackComponent implements OnInit {

  qid:string;
  description:string;
  name:string;//this must be the link
  max:string;
  min:string;

  ok:boolean;
  success:string;
  error:string;

  constructor(private service:CouncellerService) { }

  ngOnInit() {
    this.qid=localStorage.getItem("id");
  }

  addTrack(){
    this.service.addTrack(this.qid,this.description,this.name,this.max,this.min).subscribe(
      data=>{
        console.log(data);
        if(data['res_status']=="success"){
          this.ok=true;
          this.success=data['response'];
        }
        else{
          this.ok=false;
          this.error=data['response'];
        }
        
      },
      err=>{
        console.log(err);
        this.ok=false;
        this.error=err['error'].response;
      }
    )
  }

}
