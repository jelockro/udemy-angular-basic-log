import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('01/08/2018 12:54:27')},
      {id: '2', text: 'Adds Bootstrap', date: new Date('01/08/2018 12:54:27')},
      {id: '3', text: 'adds more logs', date: new Date('01/08/2018 12:54:27')}
    ]
  }

}
