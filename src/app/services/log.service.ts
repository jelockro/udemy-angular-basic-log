import { Injectable } from '@angular/core';
import { Log } from "../models/log";
import { BehaviorSubject } from "rxjs";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    this.logs = [
      // {id: '1', text: 'Generated Components', date: new Date('01/08/2018 12:54:27')},
      // {id: '2', text: 'Adds Bootstrap', date: new Date('01/08/2018 12:54:27')},
      // {id: '3', text: 'adds more logs', date: new Date('01/08/2018 12:54:27')}
    ]
  }
  getLogs(): Observable<Log[]> {
    if(localStorage.getItem('logs') === null) {
      this.logs =[];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'))
    }
    return of(this.logs.sort((a,b) => {
      console.log(`b.date: ${b.date}, a.date: ${a.date}` )
      return b.date = a.date;
    }));
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
  addLog(log: Log) {
    this.logs.unshift(log);
    
    // Adds to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs))

  } 
  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if(log.id === curr.id){
        this.logs.splice(index,1 );
      }
    });
    this.logs.unshift(log);
  }
  deleteLog(log: Log){
    this.logs.forEach((curr, index) => {
      if(log.id === curr.id){
        this.logs.splice(index,1 );
      }
    });
  }
  clearState() {
    this.stateSource.next(true);
  }
}
