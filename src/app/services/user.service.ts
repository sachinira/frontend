import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { AccountUser } from '../home/account_user';
import { EnterMsg } from '../dashboard/dchat/enterChat';
import { ChatMessage } from '../dashboard/dchat/chat';


/*import ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    username: '6b4b5775-768f-40e8-9e32-91f152d91a3c',
    password: 'kM1SOGSEcQCo',
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
  });
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private baseUrl:string = 'http://206.189.89.19:8081/api';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json').append('Authorization',localStorage.getItem("tok")).append('id',localStorage.getItem("id"))
    
  };

  

  second:any;
  allMessage:EnterMsg[] = [];
  results:any;
  messaget:EnterMsg;

  interval:any;

  countNotification:number=0;
  countMessage:number=0;
  otherMsg:number=0;

  notifications:string[]=[];
  notificationDates:string[]=[];
  releventUsers:string[]=[];
  i:number=0;
  j:number=0;

  messages:string[]=[];
  messageDates:string[]=[];
  senders:string[]=[];

  newMsg:EnterMsg = new EnterMsg();

  constructor(private http:HttpClient) { }


  change_user_gps(id:string,gps:string){
    return this.http.post(this.baseUrl+'/user/gps',{id,gps},this.httpOptions);
  }

  update_stress_level(id:string,level:string){
    return this.http.post(this.baseUrl+'/level',JSON.stringify({id,level}),this.httpOptions);
  }

  get_stress_level(id:string){
    return this.http.post(this.baseUrl+'/getLevel',{id},this.httpOptions);
  }

  map_counceller(user_id:string,counceller_id:string){
    return this.http.post(this.baseUrl+'/user/mapCounceller',{user_id,counceller_id},this.httpOptions);
  }
  get_all_councellers(){
    return this.http.post(this.baseUrl+'/getAllCouncellers',{},this.httpOptions);
  }

  get_mapped_councellers(id:string){
    return this.http.post(this.baseUrl+'/getMappedCouncellers',{id},this.httpOptions);
  }

  getData(id:string){

    return this.http.post(this.baseUrl+'/getData',{id},this.httpOptions);
    
  }

  getMsg(id1:string,id2:string,numberOfInstance:string){
    this.allMessage = [];

    return this.http.post(this.baseUrl+'/getOneChat',{id1,id2,numberOfInstance},this.httpOptions).subscribe(
      (data)=>{
        data['list'].forEach(element => {
          this.allMessage.push(element);
         }
        )
      },
      (err)=>{
        console.log(err);
        
      }
    
    );
  }

  chat(chat:ChatMessage){

    this.newMsg.receiver = parseInt(chat.receiver_id);
    this.newMsg.sender=parseInt(chat.sender_id);
    this.newMsg.msg = chat.msg;
    this.newMsg.date_time = chat.date_time;

   /* var toneParams = {
      'tone_input': { 'text': this.newMsg.msg },
      'content_type': 'application/json'
    };

    toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
      if (error) {
        console.log(error);
      } else { 
        console.log(JSON.stringify(toneAnalysis, null, 2));
      }
    });*/

    this.allMessage.push(this.newMsg);
    

    return this.http.post(this.baseUrl+'/chat',JSON.stringify(chat),this.httpOptions);

    
  }


  get_history(id:string){
    return this.http.post(this.baseUrl+'/user/LevelHistory',{id},this.httpOptions);
  }

  account_setting(user:AccountUser){
    console.log(JSON.stringify(user));
    return this.http.post(this.baseUrl+'/accountSetting',JSON.stringify(user),this.httpOptions);
  }

  booking_request(user_id:string,counceller_id:string){
    return this.http.post(this.baseUrl+'/user/Request',{user_id,counceller_id},this.httpOptions);
  }

  delete_request(user_id:string,request_id:string){
    return this.http.post(this.baseUrl+'/user/deleterequest',{user_id,request_id},this.httpOptions);
  }

  confirm_response(user_id:string,booking_request_id:string){
    return this.http.post(this.baseUrl+'/user/confirm',{user_id,booking_request_id},this.httpOptions);
  }

  realtime(id:string){

    this.interval = setInterval(() => {
      return this.http.post(this.baseUrl+'/realtime',{id},this.httpOptions).subscribe(
        data => {
            console.log(data);
            if(data['status']){
              this.results = data['list'];
              this.getNotifications();
            }
           
        });
     }, 5000);
    
  }


  getNotifications(){
   
    this.results.forEach((x:any)=>{
      if(x.type === "messages"){
        this.countMessage++;
        this.messages[this.i] = x.updatedStatus;
        this.messageDates[this.i] = x.notificationSendDate;
        this.senders[this.i] = x.affectedUserId;

        this.messaget = new EnterMsg(x.notificationSendDate,0,x.fromId,x.affectedUserId,x.data);
        
        this.i++;
        this.allMessage.push(this.messaget);
      }
      else{
        this.countNotification++;
        this.notifications[this.j] = x.updatedStatus;
        this.notificationDates[this.j] = x.notificationSendDate;
        this.releventUsers[this.j] = x.affectedUserId;
        this.j++;
      }
      
    })
  }

 /* pushMsg(id:string){
    return this.http.post(this.baseUrl+'/realtime',{id},this.httpOptions).subscribe(
      data=>{
        if(data['status']){
          this.results = data['list'];
          if(this.results.length >= 0){
            this.results.forEach((x:any)=>{
              if(x.type === "messages"){
                this.allMessage.push(this.messaget);
              }
            });
          }
        }
      },
      err =>{
        console.log(err);
        
      }
    );

  }
*/
 
  getTips(id:string,numberOfInstance:string){
    return this.http.post(this.baseUrl+'/getTips',{id,numberOfInstance},this.httpOptions);
  }

 
  delete_counceller(userId:string,councellerId:string){
    return this.http.post(this.baseUrl+'/user/removeCounceller',{userId,councellerId},this.httpOptions);
  }

  getTracks(id:string){
    return this.http.post(this.baseUrl+'/user/getTracks',{id},this.httpOptions);
  }

  bookingHistory(id:string){
    return this.http.post(this.baseUrl+'/user/getBookingHistory',{id},this.httpOptions);
  }

  imageUpload(file:File){
    return this.http.post(this.baseUrl+'/imageupload',{},this.httpOptions);
  }
}