import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-dchat',
  templateUrl: './dchat.component.html',
  styleUrls: ['./dchat.component.css']
})
export class DchatComponent implements OnInit,AfterViewChecked {

  @ViewChild('scroller') private feedContainer:ElementRef; 

  newchat:boolean = true;

  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("chatC") == null ){
      this.newchat = true;
    }
    else{
      this.newchat = false;
    }
  }

  scrollBottom():void{
    this.feedContainer.nativeElement.scrollBottom =
    this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked(){
    this.scrollBottom();
  }

}
