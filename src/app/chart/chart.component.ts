import { Component, OnInit } from '@angular/core';

import { chartData } from './indicator-data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{

    public primaryXAxis: Object;
    public chartData: Object[] = chartData;
    public title: string;
    public periods: Object;
    public seriesType: string[] = [];
    public indicatorType: string[] = [];
    public trendlineType: string[] = [];
    public exportType: string[] = [];

    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime'
        };
        this.periods = {
            position: 'Top',
            periods: [
                { intervalType: 'Minutes', interval: 1, text: '1m' },
                { intervalType: 'Minutes', interval: 30, text: '30m' },
                { intervalType: 'Hours', interval: 1, text: '1H' },
                { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
                { intervalType: 'Auto', text: '1D' }]
            };
    }
}
