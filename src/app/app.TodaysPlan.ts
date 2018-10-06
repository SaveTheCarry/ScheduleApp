import { Component } from '@angular/core';
import { Worker } from './app.worker';
import { Worker } from 'cluster';

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
    new Worker(45,0,24, 6, '0',),
    new Worker(84,8, 14 ,4, '0', ), 
  ];

  timeCal(){
    console.log("YO")
    if ( this.Kitchen.Worker.startingHour == 24) {
      this.Kitchen.Worker.startingHour = 0
       console.log(" if 24 YO")
    }
    
    if (this.Kitchen.Worker.startingHour > 12){
      console.log(" if > 24 YO")
      this.Kitchen.Worker.shiftTime = (this.Kitchen.Worker.startingHour - 12) + 'pm'
    
    }
  }
};

