import { HadsQuestion } from "./hadsquestion";

export class HadsQuiz{
    constructor(private ques:HadsQuestion[],public scorea:number,public scored:number,public score:number,public index:number){

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
      this.scorea=0;
      this.scored=0;

      

       for(var i=0;i<this.ques.length;i++){
        if(this.ques[i].index == "0" ||this.ques[i].index == "2"||this.ques[i].index == "4"||this.ques[i].index == "6"||this.ques[i].index == "8"||this.ques[i].index == "12",this.ques[i].index == "14"){
            this.scorea = this.scorea+ +this.ques[i].mark;
        }
        else{
          this.scored = this.scored+ +this.ques[i].mark;
        }
      }

      this.score = this.scorea + this.scored;

      this.score = (this.score/45)*100;
    }
}