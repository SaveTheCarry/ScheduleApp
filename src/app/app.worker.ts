import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: '/TodaysPlan.html', 
  styleUrls: ['./app.component.css']
})
export class Worker {
    constructor(
        public id: number,
        public name: string) { }

        
}