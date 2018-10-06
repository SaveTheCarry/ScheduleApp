import { Component } from '@angular/core';
import { Worker } from './app.workers';


@Component({
  selector: 'app-root',
  templateUrl: '/HomePage.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedule-app';
  name = 'No'

  titleSwitch() {
     
    if (this.title == 'schedule-app') {
      this.title = "YO"
      console.log(this.title, "IF YO")
  } else {
    this.title = 'schedule-app'
    console.log(this.title, "else YO")
  }   
  
}


}


