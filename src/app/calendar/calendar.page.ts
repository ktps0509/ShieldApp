import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  onEventSelected(){
  }

  onViewTitleChanged(){

  }

  onTimeSelected(){
    console.log("AAA")
  }

}
