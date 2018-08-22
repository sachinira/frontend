import { Component, OnInit } from '@angular/core';
import { CouncellerService } from '../../services/counceller.service';
import { Confirm } from './confirm';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dcbookingres',
  templateUrl: './dcbookingres.component.html',
  styleUrls: ['./dcbookingres.component.css']
})
export class DcbookingresComponent implements OnInit {

  confirmdata:Confirm = new Confirm();

  constructor(private service:CouncellerService) { }

  ngOnInit() {
  }

  submitResponse(form:NgForm){

    this.service.confirm(this.confirmdata).subscribe(
      data =>{
        console.log(data);
        
      },
      err =>{
        console.log(err);
        
      }
    );
  }

}
