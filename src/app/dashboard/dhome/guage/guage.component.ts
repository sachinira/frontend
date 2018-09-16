import { Component, OnInit } from '@angular/core';
import { Gauge } from '../../../../assets/js/gauge.min';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-guage',
  templateUrl: './guage.component.html',
  styleUrls: ['./guage.component.css']
})
export class GuageComponent implements OnInit {

  constructor(private service:UserService) { }

  history:string[]=[];
  historynow:number;

  ngOnInit() {

    this.service.get_history(localStorage.getItem("id")).subscribe(
      data=>{
        data['historyList'].forEach(element => {
          this.history.push(element['stressLevel']);
          
        });

        this.historynow = parseFloat(this.history[this.history.length-1]);
        console.log(this.historynow);
        

        var opts = {
          angle: -0.19, // The span of the gauge arc
          lineWidth: 0.44, // The line thickness
          radiusScale: 0.93, // Relative radius
          pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#99408D' // Fill color
          },
          /*staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [100, 130, 150, 220.1, 260, 300],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
          },*/
          limitMax: false,     // If false, max value increases automatically if value > maxValue
          percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]], 
          limitMin: false,     // If true, the min value of the gauge will be fixed
          colorStart: '#6FADCF',   // Colors
          colorStop: '#8FC0DA',    // just experiment with them
          strokeColor: '#E0E0E0',  // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true,     // High resolution support
          
        };
        
        var target = document.getElementById('canvas-preview'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        gauge.maxValue = 100; // set max gauge value
        gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(this.historynow); // set actual value
        gauge.setTextField(document.getElementById("preview-textfield"));
      
      },
      err=>{

      }
    )

  }

}
