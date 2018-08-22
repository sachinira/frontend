import { PssQuestion } from "./pssquestion";

export class PssQuiz{
    constructor(private ques:PssQuestion[],public score:number,public index:number){

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
      this.score=0;

      for(var i=0;i<this.ques.length;i++){
        this.score = this.score+ +this.ques[i].mark;
      }

      this.score = (this.score/40)*100
    }
}