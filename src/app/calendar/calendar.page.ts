import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { VaccineServiceService } from '../service/vaccine-service.service';
import * as moment from 'moment';
import { LoadingService } from '../service/loading.service';
import { CalendarComponent } from 'ionic2-calendar/calendar'

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
export class CalendarPage implements OnInit {

  VacDetail
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };


  User: UserGet;
  DateModel = []
  VacShow: any = [];

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
    
    this.loadingService.show("Loading")
    this.VacService.GetCurrentUser().then((data) => {
      this.email = data.email;
      this.GetVacHistory(this.email)
      this.loadingService.hide();
    })
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }

  GetVacHistory(uid) {
    this.VacService.GetHistoryVaccine(uid).subscribe((data) => {
      this.VacArray = data.data
      this.addEvent()
    })

  }

  async addEvent() {
    if (this.VacArray) {
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
        this.eventSource.push(eventCopy);

      }
    }
  }




  onViewTitleChanged(title) {
    this.viewTitle = title
  }

  onTimeSelected(ev) {

    this.loadingService.show("Waiting...");

    this.VacShow = null;

    if (ev.events.length >= 1) {
      let selected = new Date(ev.selectedTime);
      let DateConvert = moment(selected).format('YYYY-MM-DD');

      this.User = Object.assign({});
      this.User.email = this.email
      this.User.vacdate = DateConvert;

      this.VacService.GetHistoryByDate(this.User).subscribe((data) => {
        // console.log(data.message,"asdsad");
        this.VacShow = data.message;

        // for (let i = 0; i < this.VacShow.length; i++) {

        // }

        // this.VacDetail = data.message[0];
        // console.log(this.VacDetail, "Detail na")
        // let vacnameth = data.message[0].vacnameth;
        // let vacnameen = data.message[0].vacnameen;
        // let vacdate = data.message[0].vacdate;
        // let vactime = data.message[0].time;
      })
    }
    this.loadingService.hide();
  }
}
