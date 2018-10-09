import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: '/HomePage.html', 
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'schedule-app';
  name = 'No'
  ngOnInit() {
    document.getElementById('loginBoxHidden').classList.replace('hidden', 'notHidden')
  }
  
  
  titleSwitch(loginV) {
   loginV = document.getElementById('loginBoxHidden').classList.contains
    
    if (document.getElementById('loginBoxHidden').classList.contains('notHidden')) {
      document.getElementById('loginBoxHidden').classList.replace('notHidden', 'hidden')
      document.getElementById('mainPage').classList.replace('hidden', 'notHidden')
      console.log(loginV, "IF YO")
  } else {
    document.getElementById('loginBoxHidden').classList.replace('hidden', 'notHidden')
    document.getElementById('mainPage').classList.replace('notHidden', 'hidden')
    
    console.log(loginV, "else YO")
  }   
  
  
}


}


