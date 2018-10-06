import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.Component";
import { TodaysPLan } from "./app.TodaysPlan";
import { availability } from "./app.availability";
import { ContactManager } from "./app.ContactManager";
import { Worker } from './app.worker';



const appRoutes: Routes = [

  { path: 'availability.html', component: availability },
  { path: 'ContactManager.html', component: ContactManager },
  { path: 'TodaysPlan.html', component: TodaysPLan },
  { path: '**', component: AppComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TodaysPLan,
    ContactManager,
    availability,
    Worker,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [ ],
  bootstrap: [AppComponent,]
})

export class AppModule { }
