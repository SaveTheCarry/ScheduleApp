import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { start } from 'repl';

@Component({
  selector: 'app-root',
  templateUrl: '/HomePage.html', 
  styleUrls: ['./app.component.css']
})
export class Worker {
  demoNextShift = new Date();
 
    constructor(
        private userName: string,
        private password: string,
        public name: string,
        public possition: string,
        public companyName: string,
        public assignedHours: number,
        public startingHour: number,
        public endingHour: number,
        public startingHourDisplay: string,
        public endingHourDisplay: string,
        public nextShift: string,) {
          
         }

         
      

       
}