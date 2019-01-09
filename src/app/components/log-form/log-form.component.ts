import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/log";
import { LogService } from "../../services/log.service";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private _logService: LogService) { }

  ngOnInit() {
    this._logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
  onSubmit(log: Log){
    console.log('button clicked');
  }
}
