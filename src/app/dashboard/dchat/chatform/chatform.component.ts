import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../chat';
import { EnterMsg } from '../enterChat';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
 
  chatmsg:ChatMessage = new ChatMessage();
  newMsg:EnterMsg = new EnterMsg();
  allMessage:EnterMsg[] = [];
  errorText:string;

  constructor(private  service:UserService) { }

  ngOnInit() {
    this.chatmsg.sender_id = localStorage.getItem("id");
    this.chatmsg.receiver_id =localStorage.getItem("chatC");//id of the receiver for a user one of the ids of mapped councellers
  }

  getCurrentDate(){
    const now = new Date();
    const day = now.getUTCFullYear() +'-'+
                (now.getUTCMonth()+1) +'-'+
                now.getUTCDate();

    const time = now.getUTCHours() + ':'+
                now.getUTCMinutes()+ ':'+
                now.getUTCSeconds();

    this.chatmsg.date_time = day + ' ' + time ;
    
  }

  send(){
    
    this.getCurrentDate();
    console.log(this.chatmsg);

    this.service.chat(this.chatmsg).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
       // if(err['statusText']=== "Unkonwn Error"){
          this.errorText = "Cannot Send The Message";
        //}
      }
    );
    

  }

  handleSubmit(event){
    if(event.keyCode === 13){
      this.send();
    }
  }

}
