import { Component, OnInit } from '@angular/core';
import { Donut} from '../../../../assets/js/gauge.min.js';


@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {



    //guage1
    var opts = {
      lines: 12, // The number of lines to draw
      angle: 0.22, // The length of each line
      lineWidth: 0.1, // The line thickness
      pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.035, // The rotation offset
        color: '#3E3939' // Fill color
      },
      limitMax: 'false', // If true, the pointer will not go past the end of the gauge
      colorStart: '#47AD49', // Colors
      colorStop: '#DF1C18', // just experiment with them
      strokeColor: '#EEEEeE', // to see which ones work best for you
      generateGradient: true
    };


    var target = document.getElementById('canvas-preview'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield"));


    //guage2

  
    var target = document.getElementById('canvas-preview1'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield1"));


    //guage3


    var target = document.getElementById('canvas-preview2'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield2"));


    //guage4



    var target = document.getElementById('canvas-preview3'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield3"));

    //guage5
    var target = document.getElementById('canvas-preview4'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield4"));

    //guage6
    var target = document.getElementById('canvas-preview5'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield5"));

    //guage7
    var target = document.getElementById('canvas-preview6'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(56); // set actual value
    gauge.setTextField(document.getElementById("preview-textfield6"));
  }

  


}
