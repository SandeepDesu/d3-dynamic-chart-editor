import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DynamicDirective, DynamicComponent } from 'd3charts';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() chart: DynamicComponent;
  @ViewChild(DynamicDirective) tabDirective: DynamicDirective;
  constructor() { }

  ngOnInit() {
    this.loadComponents();
  }
  loadComponents() {
    const viewContainerRef = this.tabDirective.viewContainerRef;
    viewContainerRef.clear();
    this.chart.CreateComponent(viewContainerRef);
    this.chart.Show();
  }

}
