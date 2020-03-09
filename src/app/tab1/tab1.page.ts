import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileUser } from '../Model/profile-user';
import { StorageService } from '../service/storage.service';
import { LoadingService } from '../service/loading.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  UserAccount: ProfileUser;

  Name: string;
  Surname: string;

  BirthDay: string;
  Age: number;
  BloodGroup: string;
  Sick: string;
  Medic: string;
  Weight: number;
  Height: number;
  UID: string;

  VacArray: any;


  loading: any;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private storage: StorageService,
    private loadingCtrl: LoadingController,
    private VacService: VaccineServiceService,
    private loadingService: LoadingService,
    private localNotifications: LocalNotifications) { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  activeix = 0;
  ngOnInit() {
    this.loadingService.hide();
    this.VacService.GetCurrentUser().then((data) => {
      this.UID = data.email;
      this.Name = data.name;
      this.Surname = data.surname;
      this.BirthDay = data.birth_date
      this.BloodGroup = data.blood_type
      this.Medic = data.drug_al
      this.Sick = data.sick
      this.Height = data.height
      this.Weight = data.weight
      this.Age = data.age
      this.GetVacHistory(this.UID);
    })
    this.Notifi();
  }


  ionViewDidEnter() {
    this.ngOnInit();
  }

  GetVacHistory(uid) {
    this.VacService.GetHistoryVaccine(uid).subscribe((data) => {
      console.log(data.data, "VacHis")
      this.VacArray = data.data
    })

  }

  Notifi() {

    if (this.VacArray) {
      for (let i = 0; i < this.VacArray.length; i++) {
        let vactime = this.VacArray[i].vactimes
        for (let i = 0; i < vactime.length; i++) {
          let Time = vactime[i].date_to;
          let VacNameTH = this.VacArray[i].vacnameth;
          let VacNameEN = this.VacArray[i].vacnameen;
          let Hospital = this.VacArray[i].hospital;

          let DateTime = Time.split("-");
          let Year = parseInt(DateTime[0]);
          let Month = parseInt(DateTime[1]) - 1;
          let Day = parseInt(DateTime[2]);

          console.log(Year, Month, Day, "จะฉีดยาละน้าาา")
          


          this.localNotifications.schedule({
            title: 'วันนี้มีฉีดวัคซีน!!',
            text:  VacNameTH,
            trigger: { at: new Date(new Date(Year, Month, Day, 15, 0, 0).getTime()) },
          });

        }

      }


    }
    console.log(new Date(new Date(2020, 2, 8, 2, 13, 0).getTime()), "DateDATE")
    console.log(new Date(new Date().getTime()), "dddededede")





  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  LogOut() {
    this.loadingService.show("Sign Out");
    this.afAuth.auth.signOut();
    this.storage.remove('User');
    this.storage.clear();
    this.loadingService.hide();
    this.router.navigate(['/login']);
  }



}
