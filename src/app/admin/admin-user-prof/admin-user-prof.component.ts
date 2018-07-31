import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-prof',
  templateUrl: './admin-user-prof.component.html',
  styleUrls: ['./admin-user-prof.component.css']
})
export class AdminUserProfComponent implements OnInit {

  cid:any;

  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit() {

   
  }

}
