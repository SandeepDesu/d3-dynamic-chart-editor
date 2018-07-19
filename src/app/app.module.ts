import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BarChartComponent, BarchartModule, DynamicDirective, LinechartComponent, LinechartModule } from 'd3charts';
import { EditorComponent } from './editor/editor.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicDirective,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BarchartModule,
    LinechartModule
  ],
  entryComponents: [
    EditorComponent,
    BarChartComponent,
    LinechartComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
