import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dctip',
  templateUrl: './dctip.component.html',
  styleUrls: ['./dctip.component.css']
})
export class DctipComponent implements OnInit {

  qid:string;
  message:string;
  ok:boolean;

  success:string;
  error:string;

  constructor(private service:CouncellerService) { }

  ngOnInit() {
    this.qid = localStorage.getItem("id");
  }

  submitTip(form:NgForm){
    this.service.add_tips(this.qid,this.message).subscribe(
      data=>{
        if(data['res_status'] == "success"){
          this.success=data['response'];
          //this.ok=true;
          $('#suc').fadeIn('slow').delay(1000).fadeOut('slow');

        }
        else{
          this.error=data['response'];
          //this.ok=false;
          $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');

        }
      },
      err=>{
        
        this.error=err['response'];
        this.ok=false;
        $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');

      }
    )

    form.reset();
  }

  /*fadeinOut(){
    $('#suc').fadeIn('slow').delay(1000).fadeOut('slow');
    $('#dan').fadeIn('slow').delay(1000).fadeOut('slow');
  }*/

}
