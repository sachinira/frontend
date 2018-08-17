import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { EnterMsg } from '../enterChat';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-chatfeed',
  templateUrl: './chatfeed.component.html',
  styleUrls: ['./chatfeed.component.css']
})
export class ChatfeedComponent implements OnInit,OnChanges,OnDestroy {

  @Input() message:EnterMsg;
  feed:any;
  qid:string;
  cid:string;
  allMessage:EnterMsg [] = [];


  interval:any;
  countNotification:number=0;
  countMessage:number=0;
  otherMsg:number=0;


  constructor(private service:UserService) { }

  ngOnInit() {
    this.qid = localStorage.getItem("id");
    this.cid = localStorage.getItem("chatC");
    
    this.service.getMsg(this.qid,this.cid,"25");
    this.allMessage = this.service.allMessage;

    /*this.interval = setInterval(() => {
      this.service.realtime(this.qid).subscribe(
        data => {
            console.log(data);
            if(data['status']){
              this.results = data['list'];
              this.getNotifications();
            }
           
        });
        this.service.pushMsg(this.qid);

     }, 5000);*/
     
    
  }

  ngOnChanges(){

    console.log(this.allMessage);
    
    this.service.getMsg(this.qid,this.cid,"25");
    this.allMessage = this.service.allMessage;

    console.log(this.allMessage);
  }

  /*getNotifications(){
    if(this.results.length >= 0){
      this.results.forEach((x:any)=>{
        if(x.type === "messages"){
          
          this.allMessage.push(this.messaget);
        }
      })
    }
  }*/

  ngOnDestroy(){
    localStorage.removeItem("chatC");
  }

}
