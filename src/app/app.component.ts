import { Component } from '@angular/core';
import { Worker } from './app.worker';


@Component({
  selector: 'app-root',
  templateUrl: '/HomePage.html', 
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  wusername: string;
  wpassword: string;
  wcompany: string;
  usersignedin: boolean = true; /*Change this to false if you want to work on sign in page (true). We need to save this value*/






  ngOnInit() {
    document.getElementById('loginBoxHidden').classList.replace('hidden', 'notHidden')
    if(this.usersignedin == true) {
      document.getElementById('loginBoxHidden').classList.replace('notHidden', 'hidden');
      document.getElementById('mainPage').classList.replace('hidden', 'notHidden');
    }

  }

logininfohandler(UserName,Passwordtext,Company){
  UserName= document.getElementById('UserText').value;
  Passwordtext= document.getElementById('PasswordText').value;
  Company= document.getElementById('CompanyText').value;
  this.wusername= UserName
  this.wpassword= Passwordtext
  this.wcompany= Company
}

signout(){
  this.usersignedin = false
  console.log("TEST YO")
}

signin(){
  this.usersignedin = true
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


