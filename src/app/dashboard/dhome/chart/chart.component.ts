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
        labels: this.date,
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
          data: this.history
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
