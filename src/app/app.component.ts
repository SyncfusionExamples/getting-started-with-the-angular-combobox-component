import { Component } from '@angular/core';
import { DataManager, WebApiAdaptor, Query } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  //array of simple data
  // public sportsData: string[] = ['Cricket', 'Football', 'Rugby', 'Snooker', 'Tennis'];

  public fieldSettings: object = { value: 'EmployeeID', text: 'FirstName'};

  public remoteData: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Employees",
    adaptor: new WebApiAdaptor,
    crossDomain: true
  })

  public query:Query = new Query().select(['FirstName', 'EmployeeID']).take(6).requiresCount();

  public complexData: { [key: string]: Object }[] = [
    { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
    { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
    { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
    { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
    { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
    { Country:{Name: 'France'}, Code: { Id:'FR'} }
];

  //JSON object
  public sportsData: object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
];
}
