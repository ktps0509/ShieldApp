import { Component } from '@angular/core';
import { ModalController, ActionSheetController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ModalSelectVacPage } from '../modal/modal-select-vac/modal-select-vac.page';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { ModalSelectTimevacPage } from '../modal/modal-select-timevac/modal-select-timevac.page';
import { Addvaccine } from '../Model/addvaccine';
import * as moment from 'moment';
import { LoadingService } from '../service/loading.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  VacForm: FormGroup;
  VacData: any;
  VacAdd: Addvaccine;
  VacSelect: any[]
  VacCode: any;
  Age: any;
  type: any;
  VacnameEn: string;
  UserEmail: string

  loading: any;

  constructor(public modalController: ModalController,
    private fb: FormBuilder,
    private VacService: VaccineServiceService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private loadingService: LoadingService,
    private router: Router) { }

  ngOnInit() {
    this.VacService.GetCurrentUser().then(user => {
      console.log(user)
      this.UserEmail = user.email;
      this.Age = user.age;
      console.log(this.UserEmail, "อีเมลลลลล");
      console.log(this.Age, "อายู้วววว")
      this.SetTypeAge(this.Age);
      this.GetVacData();

    });
    this.createForm();

  }

  ionViewDidEnter() {
    this.ngOnInit();
  }

  createForm() {
    this.VacForm = this.fb.group({
      Date: [""],
      Vaccine: [""],
      Time: [""],
      Hospital: [""]
    })
  }

  GetVacData() {
    this.VacService.getVacForSave().subscribe((data) => {
      console.log(data.data, "getvacdata")
      this.VacData = data.data;
    })
  }

  SetTypeAge(age: number) {
    if (age >= 0 && age <= 3) {
      this.type = "A"
    }
    else if (age >= 4 && age <= 12) {
      this.type = "B"
    }
    else if (age >= 13 && age <= 18) {
      this.type = "C"
    }
    else if (age >= 19 && age <= 26) {
      this.type = "D"
    }
    else if (age >= 27 && age <= 64) {
      this.type = "E"
    }
    else {
      this.type = "F"
    }

  }

  async presentAlert(al: string) {
    let alert = await this.alertCtrl.create({
      message: al,
      buttons: ['Dismiss']
    });
    return alert.present();
  }

  async ModalSelectVaccine() {
    this.loadingService.show("Loading")

    const modal = await this.modalController.create({
      component: ModalSelectVacPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'type': this.type
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data.dismissed !== true) {
        this.VacForm.controls.Vaccine.setValue(data.data.vacnameth)
        this.VacnameEn = data.data.vacnameen;
        this.VacCode = data.data.vaccode;

      }
    });
    return await modal.present();
  }

  async ModalSelectVaccineTime() {
    this.loadingService.show("Loading")

    const modal = await this.modalController.create({
      component: ModalSelectTimevacPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'VacCode': this.VacCode,
      }
    });
    modal.onDidDismiss().then(data => {
      if (data.data.dismissed !== true) {
        this.VacForm.controls.Time.setValue(data.data.time)
      }
    });
    return await modal.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  async AddVaccine() {

    this.loadingService.show("Loading")
    this.VacAdd = Object.assign({});
    this.VacAdd.email = this.UserEmail;
    this.VacAdd.vaccode = this.VacCode;
    this.VacAdd.vacnameth = this.VacForm.controls.Vaccine.value;
    this.VacAdd.vacnameen = this.VacnameEn;
    this.VacAdd.start_from = this.VacForm.controls.Time.value;
    this.VacAdd.start_date = moment(this.VacForm.controls.Date.value).format('YYYY-MM-DD');
    this.VacAdd.hospital = this.VacForm.controls.Hospital.value;
    this.VacAdd.vacdata = this.VacData;

    console.log(this.VacAdd, "ADD")
    await this.VacService.AddVaccine(this.VacAdd).subscribe((data) => {
      this.VacService.openSuccess('Add Success');
      this.router.navigate(['/tabs/tab1']);
      this.loadingService.hide();
    })

  }

}
