import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/dhome', title: 'Home',  icon: 'glyphicon glyphicon-home', class: '' },
  { path: '/dashboard/dbook', title: 'Booking',  icon:'glyphicon glyphicon-dashboard', class: '' },
  { path: '/dashboard/dchat', title: 'Chat',  icon:'glyphicon glyphicon-home', class: '' },
  { path: '/dashboard/dprofile', title: 'Profile',  icon:'glyphicon glyphicon-user', class: '' },
  { path: '/dashboard/dmusic', title: 'Music theropy',  icon:'glyphicon glyphicon-home', class: '' }
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {

    document.getElementById("mySidenav").style.width = "0px";
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  
}
