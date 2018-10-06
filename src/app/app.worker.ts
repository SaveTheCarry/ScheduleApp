import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: '/HomePage.html', 
  styleUrls: ['./app.component.css']
})
export class Worker {

 
    constructor(
       /* private userName: string,
        private password: string,
        public possition: string,
        public name: string,*/
        public assignedHours: number,
        public workingHours: number,
        public startingHour: number,
        public EndingHour: number,
        public shiftTime: string, ) { }

       
}