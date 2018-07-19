import { Component, OnInit, ComponentRef, ApplicationRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import { StandardBuilder, DynamicComponent, LinechartComponent, BarChartComponent } from 'd3charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  compRef: ComponentRef<EditorComponent>;
  chartType = 'line';
  private table = [];
  private source = {
    'data': [
      {
        "Details": [

        ]
      }
    ]
  };
  constructor(private injector: Injector, private resolver: ComponentFactoryResolver, private appRef: ApplicationRef) {

  }
  onSubmitValue(x, y) {
    this.source.data[0].Details.push({ x: x, y: parseInt(y, 10) });
    this.table.push({ x: x, y: parseInt(y, 10) });
    this.loadMap();
  }

  ngOnInit() {
    this.loadMap();
  }
  changeChart(type) {
    this.chartType = type;
    this.loadMap();
  }

  loadMap() {
    if (this.compRef) {
      this.compRef.destroy();
    }
    const dynamicaChart = document.getElementById('dynamic-display-chart');
    const compFactory = this.resolver.resolveComponentFactory(EditorComponent);
    this.compRef = compFactory.create(this.injector);
    const chartData = new StandardBuilder(this.source, 'Chart', 1);
    const dynamicCharts = new DynamicComponent(this.chartType === 'line' ? LinechartComponent : BarChartComponent, chartData, this.resolver);
    this.compRef.instance.chart = dynamicCharts;
    dynamicaChart.appendChild(this.compRef.location.nativeElement);
    this.appRef.attachView(this.compRef.hostView);
    this.compRef.onDestroy(() => {
      this.appRef.detachView(this.compRef.hostView);
    });
  }


}
