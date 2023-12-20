import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less']
})
export class ChartsComponent implements OnInit {
basicData: any
numMonth: any
numVolunt: any


  ngOnInit(): void {
    this.numMonth = Math.floor( Math.random()* 100000) + 1000;
    this.numVolunt = Math.floor( Math.random()* 100000) + 1000;
    this.basicData = {
      datasets : [{
        data: [this.numMonth , this.numVolunt],
        backgroundColor: [
          "#E22E6F",
          "#594CBE",
      ],
      hoverBackgroundColor: [
        "#E22E6F",
        "#594CBE",
    ]
      }]
    }
  }

  generateNumberMonth() {
   
  }

}
