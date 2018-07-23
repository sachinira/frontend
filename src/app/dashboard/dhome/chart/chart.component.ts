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
  history:string[] = [];
  date:number[] = [];
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
   /* var ctx = document.getElementById('mychart');
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

    gradientStroke.addColorStop(0, "#80b6f4");

    gradientStroke.addColorStop(1, "#f49080");*/

    this.chart = new Chart('mychart',{
      type:'line',
      data: {
        labels: this.date,
        datasets: [{
          label: "Data",
          borderColor: "#80b6f4",
          pointBorderColor: "#80b6f4",
          pointBackgroundColor: "#80b6f4",
          pointHoverBackgroundColor: "#80b6f4",
          pointHoverBorderColor: "#80b6f4",
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: [100, 120, 150, 170, 180, 170, 160]
      }]

      },
      options:{
        responsive:true,
        legend: {
          position: "bottom"
        },
        
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
