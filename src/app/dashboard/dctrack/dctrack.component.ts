import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dctrack',
  templateUrl: './dctrack.component.html',
  styleUrls: ['./dctrack.component.css']
})
export class DctrackComponent implements OnInit {

  qid:string;
  description:string;
  name:string;
  levela:string;
  leveli:string;
  track:string;

  ok:boolean;
  success:string;
  error:string;

  constructor(private service:CouncellerService) { }

  ngOnInit() {
    this.qid=localStorage.getItem("id");
  }

  onAddTrack(form:NgForm){
  
    this.service.addTrack(this.qid,this.name,this.description,this.levela,this.leveli,this.track).subscribe(
      data=>{
        console.log(data);
        if(data['res_status']=="success"){
          this.success=data['response'];
          //this.ok=true;
          $('#suc').fadeIn('slow').delay(1000).fadeOut('slow');
        }
        else{
          this.error=data['response'];
          this.ok=false;
          $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');
        }
        
      },
      err=>{
        console.log(err);
        this.error=err['error'].response;
        //this.ok=false;
        $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');
      }
    )
    
    form.reset();
  }

 /* fadeinOut(){
    
    $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');
  }*/


  //validation of the form 
 
}
