import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { VaccineServiceService } from '../service/vaccine-service.service';
import * as moment from 'moment';
import { LoadingService } from '../service/loading.service';

export class UserGet {
  email: string;
  vacdate: string
}

export class vac {
  email: string;
  vacdate: string
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage {
  
  VacDetail
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };


  User : UserGet;
  DateModel = []

  VacArray: any;
  DateVac: [];

  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  }

  email: string;


  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private VacService: VaccineServiceService,
    private loadingService: LoadingService) { }

  ngOnInit() {

    this.VacService.GetCurrentUser().then((data) => {
      this.email = data.email;
      this.GetVacHistory(this.email)
    })

  }

  async GetVacHistory(uid) {
    await this.VacService.GetHistoryVaccine(uid).subscribe((data) => {
      console.log(data.data, "VacHis")
      this.VacArray = data.data
      console.log(this.VacArray, "เวลาจะฉีดน้า")
    })

    setTimeout(() => {
      this.addEvent() // Request permissions after splashScreen.hide() after timeout delay equal to fade out timeout.
    }, 3000);
    
  }


  async addEvent() {

    for (let i = 0; i < this.VacArray.length; i++) {
      let vactime = this.VacArray[i].vactimes
      for (let i = 0; i < vactime.length; i++) {
        let vacTimeGet = vactime[i].date_to;
        this.DateModel.push(vacTimeGet)
      }
    }

    for (let i = 0; i <= this.DateModel.length; i++) {
      let eventCopy = {
        title: this.event.title,
        startTime: new Date(this.DateModel[i]),
        endTime: new Date(this.DateModel[i]),
        allDay: this.event.allDay,
        desc: this.event.desc
      }
      setTimeout(() => {
        this.eventSource.push(eventCopy);
      });

    }
    this.loadingService.hide()
  }

  onViewTitleChanged(title) {
    this.viewTitle = title

  }

  onTimeSelected(ev) {

    this.VacDetail = null;

    if(ev.events.length >= 1){
      let selected = new Date(ev.selectedTime);
      let DateConvert = moment(selected).format('YYYY-MM-DD');
      console.log(DateConvert,"eieieieieie")

      this.User = Object.assign({});
      this.User.email = this.email
      this.User.vacdate = DateConvert;
      console.log(this.User, "PPPOOOO")

      this.VacService.GetHistoryByDate(this.User).subscribe((data) => {
        console.log(data.message[0])
        
        this.VacDetail = data.message[0];
        console.log(this.VacDetail, "Detail na")
        let vacnameth = data.message[0].vacnameth;
        let vacnameen = data.message[0].vacnameen;
        let vacdate = data.message[0].vacdate;
        let vactime = data.message[0].time;
      } )
    }
  }


}
