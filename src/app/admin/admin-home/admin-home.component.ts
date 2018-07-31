import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { AdminService } from '../../services/admin.service';
import { Quiz } from '../../dashboard/dques/quiz';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
 admin_id:string;
 user:string;
 coun:string;
 userp:string;
 counp:string;
 count:string;
  constructor(private adminService:AdminService) { }

  ngOnInit() {

    this.admin_id=localStorage.getItem("id");

    
    this.adminService.getUsage(this.admin_id).subscribe(
      data=>{
        
      }
    )
    
  
   

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["user","counceller"],
        datasets: [{
            label: '# of Votes',
            data: [80.3,19.6],
            backgroundColor: [
                'rgba(215, 13, 17,0.8)',
                'rgba(52, 3, 231,0.8)',
               
            ],
            borderColor: [
                'rgb(0, 0, 0)',
                'rgb(0, 0, 0)',
                
            ],
            borderWidth: 1
        }]
    },
   
});

var ctx1 = document.getElementById("myChart1");

var myLineChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "user",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Counceller",
        borderColor: "#8e5ea2",
        fill: false
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});


}

countSamples() {
   
  
  }

}
