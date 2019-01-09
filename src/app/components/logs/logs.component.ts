import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/log";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor() { }

  ngOnInit() {

  }

}
