import { HadsQuestion } from "./hadsquestion";

export class HadsQuiz{
    constructor(private ques:HadsQuestion[],public score:number,public index:number){

    }
  
    getIndex(){
      return this.ques[this.index];
    }
  
    isEnded(){
      if(this.ques.length == this.index){
        return true;
      }else{
        return false;
      }
    }
  
    iterate(){
      this.index++;
    }
  
    scoreQuiz(){
       for(var i=0;i<this.ques.length;i++){
        this.score = this.score+ +this.ques[i].mark;
      }
    }
}