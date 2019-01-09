import { Injectable } from '@angular/core';
import { Log } from "../models/log";
import { getAllRouteGuards } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('01/08/2018 12:54:27')},
      {id: '2', text: 'Adds Bootstrap', date: new Date('01/08/2018 12:54:27')},
      {id: '3', text: 'adds more logs', date: new Date('01/08/2018 12:54:27')}
    ]
  }
  getLogs() {
      return this.logs;
  }
}
