import { Component } from '@angular/core';
import { Worker } from './app.Worker';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-root',
  templateUrl: './TodaysPLan.html', 
  styleUrls: ['./app.component.css']
})


export class TodaysPLan {
  title = 'schedule-app';
  date = new Date();
  demoNextShift = ((this.date.getMonth())+ '/' +(this.date.getDate()+1) + ': "4pm-10pm: Expo"');
  currentDay =  this.date.getDate();
  currentMonth = this.date.getMonth()
  kitchen = []
    
  snackBar = [];
  


  WorkAreas = [
    this.kitchen = [new Worker('SaveTheCarry', '####', 'Will Burley', 'Expo', 'Srikes Unlimited', 6, 16, 22, '', '',''),
    new Worker('TheyCallMeDmg', '####', 'JordanLampman', 'Cook', 'Srikes Unlimited', 8, 16, 0, '', '', '')],
    this.snackBar = [new Worker('Demons?', '####', 'Jacob Parker', 'Snack Bar', 'Srikes Unlimited', 8, 16, 0, '', '', '')],
  ]
  
  ngOnInit() {
    this.kitchen.forEach(Worker => {
      if(Worker.startingHour > 12){
        Worker.startingHourDisplay = ((Worker.startingHour - 12) + 'pm')
      } else {
        Worker.startingHourDisplay = ((Worker.startingHour) + 'am')
      };
      if(Worker.startingHour == 0){
        Worker.startingHourDisplay = '12am'
      };


      if(Worker.endingHour > 12){
        Worker.endingHourDisplay = ((Worker.endingHour - 12) + 'pm')
      } else {
        Worker.endingHourDisplay = ((Worker.endingHour) + 'am')
      };
      if(Worker.endingHour == 0){
        Worker.endingHourDisplay = '12am'
      };
      Worker.nextShift = this.demoNextShift;
    });


    this.snackBar.forEach(Worker => {
      if(Worker.startingHour > 12){
        Worker.startingHourDisplay = ((Worker.startingHour - 12) + 'pm')
      } else {
        Worker.startingHourDisplay = ((Worker.startingHour) + 'am')
      };
      if(Worker.startingHour == 0){
        Worker.startingHourDisplay = '12am'
      };


      if(Worker.endingHour > 12){
        Worker.endingHourDisplay = ((Worker.endingHour - 12) + 'pm')
      } else {
        Worker.endingHourDisplay = ((Worker.endingHour) + 'am')
      };
      if(Worker.endingHour == 0){
        Worker.endingHourDisplay = '12am'
      };
      Worker.nextShift = this.demoNextShift;
    });
    
  }
  
  
};

