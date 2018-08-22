import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Quiz } from '../dques/quiz';

@Component({
  selector: 'app-dmusic',
  templateUrl: './dmusic.component.html',
  styleUrls: ['./dmusic.component.css']
})
export class DmusicComponent implements OnInit {

  levelg:string[]=[];
  nohistory:boolean;

  level:number;

  mintracks:string[]=[];
  midtracks:string[]=[];
  maxtracks:string[]=[];


  high:boolean;
  low:boolean;
  mid:boolean;
  qid:string;

  constructor(private service:UserService) { }

  ngOnInit() {

    this.qid = localStorage.getItem("id");

    this.service.get_history(this.qid).subscribe(
      data=>{
        data['historyList'].forEach(element => {
          this.levelg.push(element['stressLevel']);
          
        });
      
        if(this.levelg.length == 0){
          this.nohistory=true;
        }

        this.level = parseFloat(this.levelg[this.levelg.length-1]);

        if(this.level<=30){
          this.high=false;
          this.mid=false;
          this.low=true;
    
          return 'rgba(108, 191, 70,0.7)';
          
      
        }
        else if(this.level<=50){
         this.high=false;
         this.mid=true;
         this.low=false;
    
          return 'rgba(218, 125, 24,0.7)';
          
        }
        else if(this.level<=100){
         this.high=true;
         this.mid=false;
         this.low=false;
    
          return 'rgba(221, 22, 18,0.7)';
          
        }
    
      },
      err=>{
        console.log(err);
        
        this.nohistory=true;
      }
    )

   
    this.service.getTracks(this.qid).subscribe(
      data =>{
        console.log(data);
        data['tracks'].forEach(element => {
          console.log(element.link);
          
          if(element.max_stress_level<=30){
            this.mintracks.push(element.link);
          }
          else if(element.max_stress_level<=50){
            this.midtracks.push(element.link);
          }
          else if(element.max_stress_level<=100){
            this.maxtracks.push(element.link);
          }

          console.log(this.mintracks);
          console.log(this.maxtracks);
          console.log(this.midtracks);
          
          
          
        });
        
      },
      err =>{
        console.log(err);
        
      }
    )
  
    
  }


  colourModel(){
    if(this.level<=30){
     
      return 'rgba(108, 191, 70,0.7)';
      
  
    }
    else if(this.level<=50){
    

      return 'rgba(218, 125, 24,0.7)';
      
    }
    else if(this.level<=100){
     

      return 'rgba(221, 22, 18,0.7)';
      
    }
  }

  

}
