import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.less']
})
export class ChartsComponent implements OnInit {
basicData: any

  ngOnInit(): void {
    this.basicData = {
      labels: ['Q1', 'Q2'],
      datasets : [{
        data: [10 , 20],
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

}
