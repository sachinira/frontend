import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Tip } from './tip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dhome',
  templateUrl: './dhome.component.html',
  styleUrls: ['./dhome.component.css']
})
export class DhomeComponent implements OnInit {


  constructor(private service:UserService,private router:Router){}

  //tips
  tips:string[]=[];
  qid:string;
  name:string[]=[];
  cids:string[]=[];
  cnames:string[]=[];
  myimage:string;

  
  //history
  history:string[]=[];

  //quote according to stress level
  level:number;
  stressnow:number;
  myname:string;

  newuser:boolean=true;

  text:string;
 
  ngOnInit(){
    this.qid = localStorage.getItem("id");
    this.myname=localStorage.getItem("name");

    this.service.get_history(this.qid).subscribe(
      data=>{
        data['historyList'].forEach(element => {
          this.history.push(element['stressLevel']);
          
        });

        if(this.history.length == 0){
          this.newuser = true;
        }
        else{
          this.newuser = false;
        }

        if(parseFloat(this.history[this.history.length-1]) <=30){
          this.text ="You are detected with low stress level.But medical treatment will be needed if these conditions exits too long.";
        }
        else if(parseFloat(this.history[this.history.length-1]) <=50){
          this.text ="You are detected with mild stress level.You may need medical advice.Try Our stress relief tunes to get some relief";
        }
        else if(parseFloat(this.history[this.history.length-1]) <=100){
          this.text="You are exposed to very high stress level.Medical treatment is a must";
        }

      }
    )

    this.updateColor();
  
    this.service.getTips(this.qid,"10").subscribe(
      data =>{
       data['data'].forEach(element => {
          this.tips.push(element.tip);
          this.cids.push(element.councellerId);
        });
        console.log(data);
        
      },
      err =>{

      }
    );

    this.cids.forEach(element => {
      this.service.getData(element).subscribe(
        data=>{
          this.cnames.push(data['name']);
        }
      )
    });

  }

  updateImage(){
    this.level = parseFloat(this.history[this.history.length-1]);
    //console.log(this.level);
    
    if(this.level <=30){
      
        return "'url('+../../../assets/img/level1.png+')'";
    }
    else if(this.level<=50){
      
        return "'url('+../../../assets/img/level1.png+')'";
    }
    else if(this.level<=100){
      
        return "'url('+../../../assets/img/level1.png+')'";
    }
  }

  updateColor(){

    this.level = parseFloat(this.history[this.history.length-1]);
    //console.log(this.level);
    
    if(this.level <=30){
      this.myimage="../../../assets/img/thumb-up.png";
        return 'rgba(108, 191, 70,0.8)';
    }
    else if(this.level<=50){
      this.myimage="../../../assets/img/doubt.png";
        return 'rgba(218, 125, 24,0.8)'
    }
    else if(this.level<=100){
      this.myimage="../../../assets/img/crying.png";
        return 'rgba(221, 22, 18,0.8)';
    }
  }


  gotoQues(){
    this.router.navigate(['/dashboard/dques']);
  }
//inssert real data
//graph???

}
