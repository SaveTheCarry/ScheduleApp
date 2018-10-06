import { Component } from '@angular/core';
import { Worker } from './app.worker';

@Component({
  selector: 'app-root',
  templateUrl: './TodaysPLan.html', 
  styleUrls: ['./app.component.css']
})


export class TodaysPLan {
  title = 'schedule-app';
  date = new Date();
  currentDay =  this.date.getDate();
  currentMonth = this.date.getMonth()

  
  WorkAres = ["Kitchen", "Bowl", "restaurant"]
  
  Kitchen = [
    new Worker(1, 'Windstorm'),
    new Worker(2, 'John'), 
    
  ];

  
