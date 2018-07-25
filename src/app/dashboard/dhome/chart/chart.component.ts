import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart:any;
  history:number[] = [];
  date:string[] = [];
  qid:string;

  constructor(private service:UserService) { }

  ngOnInit() {
    this.qid = localStorage.getItem("id");

    this.service.get_history(this.qid).subscribe(
      (data)=>{
        data['historyList'].forEach(element => {
          this.history.push(element['stressLevel']);
          this.date.push(element['dateTime']);
        });

        console.log(this.history);
        console.log(this.date);
      },
      (err)=>{
        console.log(err);
        
      }
    );
   
    

    this.chart = new Chart('mychart',{
      type:'line',
      data: {
        labels: ["2018-06-05","2018-06-30","2018-07-01","2018-07-02","2018-07-05","2018-07-20","2018-07-21","2018-07-23","2018-07-25"],
        datasets: [{
          label: "Stress Level %",
          borderColor: "#FEFDFD",
          borderWidth:2,
          pointBorderColor: "#FEFDFD",
          pointBackgroundColor: "#FEFDFD",
          pointHoverBackgroundColor: "#FEFDFD",
          pointHoverBorderColor: "#80b6f4",
          pointBorderWidth: 4,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          data: [10,5,20,40,50,56,53,42,49]
      }]

      },
      options:{
      
        
        scales:{
          yAxes: [{
            ticks: {
                fontColor: "rgb(255,255,255)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

          }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"

            },
            ticks: {
                padding: 20,
                fontColor: "rgb(255,255,255)",
                fontStyle: "bold"
            }
        }]
        }
      }
   });
  }



}
