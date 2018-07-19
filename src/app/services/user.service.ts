import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { AllUser } from '../home/all_user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private baseUrl:string = 'http://206.189.89.19:8081/api';
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json').append('Authorization',localStorage.getItem("tok")).append('id',localStorage.getItem("id"))
    
  };

  

  second:any;
 /* allMessage:EnterMsg[] = [];
  newMsg:EnterMsg = new EnterMsg();*/

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
    return this.http.post(this.baseUrl+'/getMappedCounellers',{id},this.httpOptions);
  }

  getData(id:string){

    return this.http.post(this.baseUrl+'/getData',{id},this.httpOptions);
    
  }

  /*getMsg(id1:string,id2:string,numberOfInstance:string){
    return this.http.post(this.baseUrl+'/getOneChat',{id1,id2,numberOfInstance},this.httpOptions).subscribe(
      (data)=>{
        data['list'].forEach(element => {
          this.allMessage.push(element);
         }

        )
      });
  }

  chat(chat:ChatMessage){

    this.newMsg.receiver = parseInt(chat.receiver_id);
    this.newMsg.sender=parseInt(chat.sender_id);
    this.newMsg.msg = chat.msg;
    this.newMsg.date_time = chat.date_time;

    this.allMessage.push(this.newMsg);
    

    return this.http.post(this.baseUrl+'/chat',JSON.stringify(chat),this.httpOptions);
  }*/


  get_history(id:string){
    return this.http.post(this.baseUrl+'/user/LevelHistory',{id},this.httpOptions);
  }

  account_setting(user:AllUser){
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
    return this.http.post(this.baseUrl+'/realtime',{id},this.httpOptions);
  }

 
  getTips(){
    return this.http.post(this.baseUrl+'/getTips',{},this.httpOptions);
  }
}