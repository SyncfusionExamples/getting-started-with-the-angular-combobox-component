import { Component } from '@angular/core';
import { projectNewData } from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  public data: object[] = projectNewData;
  public editOptions: object = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    mode: "Auto"
  }
  public toolbarOptions: string[] = ["Add", "Edit", "Update", "Delete", "Cancel", "ExpandAll", "CollapseAll", "Indent", "Outdent"];
  public columnSettings: object[] = [
    {field: "TaskID", headerText: "Task ID"},
    {field: "TaskName", headerText: "Task Name"},
    {field: "StartDate", headerText: "StartDate", format: "dd-MMM-yy"},
    {field: "Duration", textAlign: "Right"},
  ]
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predecessor"
  }
};

