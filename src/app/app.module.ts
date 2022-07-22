import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GanttModule, EditService, ToolbarService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GanttModule
  ],
  providers: [EditService, ToolbarService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
