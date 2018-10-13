import { Component } from '@angular/core';
import { Worker } from './app.worker';


@Component({
  selector: 'app-root',
  templateUrl: './TodaysPLanM.html', 
  styleUrls: ['./app.component.css']
})


export class TodaysPLanM {
  title = 'schedule-app';
  date = new Date();
  currentDay =  this.date.getDate();
  currentMonth = this.date.getMonth()
 
  kitchen = [];
  snackBar = [];
  WorkAres = [
    this.kitchen = [
        new Worker('SaveTheCarry', '####', 'Will Burley', 'Expo', 'Srikes Unlimited', 6, 16, 22),
        new Worker('TheyCallMeDmg', '####', 'JordanLampman', 'Cook', 'Srikes Unlimited', 8, 16, 0)
    ],
    this.snackBar = [new Worker('Demons?', '####', 'Jacob Parker', 'Cook', 'Srikes Unlimited', 8, 16, 0)],
  ]
  
  
  
};