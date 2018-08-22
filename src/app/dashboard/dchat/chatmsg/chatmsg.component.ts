import { Component, OnInit,Input } from '@angular/core';
import { EnterMsg } from '../enterChat';

@Component({
  selector: 'app-chatmsg',
  templateUrl: './chatmsg.component.html',
  styleUrls: ['./chatmsg.component.css']
})
export class ChatmsgComponent implements OnInit {

  @Input() enterMsg:EnterMsg;
  message:string;
  time:string;
  nsender:number;
  nreceiver:number;
  isOwn:boolean=false;
  qid:string;

  constructor() { }

  ngOnInit(enterMsg = this.enterMsg) {
    this.qid = localStorage.getItem("id");

    this.message = this.enterMsg.msg;
    this.time = this.enterMsg.date_time;
    this.nsender= this.enterMsg.sender || this.enterMsg.receiver ;

    if(parseInt(this.qid) === this.nsender){
      this.isOwn = true;
    }
  }

}
