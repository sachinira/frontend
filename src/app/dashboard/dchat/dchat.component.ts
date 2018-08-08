import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-dchat',
  templateUrl: './dchat.component.html',
  styleUrls: ['./dchat.component.css']
})
export class DchatComponent implements OnInit,AfterViewChecked {

  @ViewChild('scroller') private feedContainer:ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  scrollBottom():void{
    this.feedContainer.nativeElement.scrollBottom =
    this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked(){
    this.scrollBottom();
  }

}
