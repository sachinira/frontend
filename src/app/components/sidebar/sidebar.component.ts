import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/dhome', title: 'Home',  icon: 'glyphicon glyphicon-home', class: '' },
  { path: '/dashboard/dques', title: 'Questions',  icon:'glyphicon glyphicon-question-sign', class: '' },
  { path: '/dashboard/dbook', title: 'Booking',  icon:'glyphicon glyphicon-dashboard', class: '' },
  { path: '/dashboard/dchat', title: 'Chat',  icon:'glyphicon glyphicon-envelope', class: '' },
  { path: '/dashboard/dprofile', title: 'Profile',  icon:'glyphicon glyphicon-user', class: '' },
  { path: '/dashboard/dmusic', title: 'Music theropy',  icon:'glyphicon glyphicon-music', class: '' }
  
];

export const CROUTES: RouteInfo[] = [
  { path: '/dashboard/dchome', title: 'Home',  icon: 'glyphicon glyphicon-home', class: '' },
  { path: '/dashboard/dctip', title: 'Add Tips',  icon: 'glyphicon glyphicon-leaf', class: '' },
  { path: '/dashboard/dctrack', title: 'Add Tracks',  icon: 'glyphicon glyphicon-music', class: '' },
  { path: '/dashboard/dcbook', title: 'Bookings',  icon: 'glyphicon glyphicon-book', class: '' },
  { path: '/dashboard/dchat', title: 'Chat',  icon:'glyphicon glyphicon-envelope', class: '' },
  { path: '/dashboard/dprofile', title: 'Profile',  icon:'glyphicon glyphicon-user', class: '' } 
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  type:any;

  constructor() { }

  ngOnInit() {

    this.type=localStorage.getItem("type");

    document.getElementById("mySidenav").style.width = "33px";

    if(this.type=="user"){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    else if(this.type=="counceller"){
      this.menuItems = CROUTES.filter(menuItem=> menuItem);
    }
   
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  
}
