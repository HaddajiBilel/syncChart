import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

//ej2 chart module 
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, PeriodSelectorService, CandleSeriesService} from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartAllModule,
    ChartModule,
    RangeNavigatorModule,
    StockChartAllModule
  ],
  providers: [AreaSeriesService, DateTimeService, PeriodSelectorService, CandleSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
