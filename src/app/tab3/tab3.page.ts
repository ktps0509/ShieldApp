import { Component } from '@angular/core';
import { ModalController, ActionSheetController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { ModalSelectVacPage } from '../modal/modal-select-vac/modal-select-vac.page';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { ModalSelectTimevacPage } from '../modal/modal-select-timevac/modal-select-timevac.page';
import { Addvaccine } from '../Model/addvaccine';
import * as moment from 'moment';
import { LoadingService } from '../service/loading.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  VacForm : FormGroup;
  VacData : any;
  VacAdd : Addvaccine;
  VacSelect: any[]
  VacCode : any;
  Age : any;
  type : any;
  VacnameEn: string;
  UserEmail: string

  loading : any;

  constructor(public modalController: ModalController,
    private fb: FormBuilder,
    private VacService: VaccineServiceService,
    private alertCtrl: AlertController,
    private loadingCtrl : LoadingController,
    private loadingService : LoadingService) {}

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

  createForm(){
    this.VacForm = this.fb.group({
      Date: [""],
      Vaccine: [""],
      Time: [""],
      Hospital: [""]
    })
  }

  GetVacData(){
    this.VacService.getVacForSave().subscribe((data) => {
      console.log(data.data, "getvacdata")
      this.VacData = data.data;
    })
  }

  SetTypeAge(age : number){
    if(age >= 0 && age <= 3){
      this.type = "A"
    }
    else if(age >= 4 && age <= 12){
      this.type = "B"
    }
    else if(age >= 13 && age <= 18){
      this.type = "C"
    }
    else if(age >= 19 && age <= 26){
      this.type = "D"
    }
    else if(age >= 27 && age <= 64){
      this.type = "E"
    }
    else{
      this.type = "F"
    }

  }

  async presentAlert(al : string) {
    let alert = await this.alertCtrl.create({
      message : al,
      buttons: ['Dismiss']
    });
    return alert.present();
  }

  async ModalSelectVaccine() {

    const modal = await this.modalController.create({
      component: ModalSelectVacPage,
      componentProps: {
        'type': this.type
      }
    });
    modal.onDidDismiss().then(data => {
      var VacSelect = data.data
      console.log(VacSelect)
      if (data.data.dismissed !== true) {
        this.VacForm.controls.Vaccine.setValue(VacSelect.vacnameth)
        this.VacnameEn = VacSelect.vacnameen;
        this.VacCode = VacSelect.vaccode;
        
      }
    });
    return await modal.present();
  }

  async ModalSelectVaccineTime() {

    const modal = await this.modalController.create({
      component: ModalSelectTimevacPage,
      componentProps: {
        'VacCode': this.VacCode,
      }
    });
    modal.onDidDismiss().then(data => {
      var VacSelect = data.data
      console.log(VacSelect)
      if (data.data.dismissed !== true) {
        this.VacForm.controls.Time.setValue(VacSelect.time)
        
      }
    });
    return await modal.present();
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  async AddVaccine(){
    
    this.loadingService.show("Loading")
    this.VacAdd = Object.assign({});
    this.VacAdd.email = this.UserEmail;
    this.VacAdd.vaccode = this.VacCode;
    this.VacAdd.vacnameth = this.VacForm.controls.Vaccine.value;
    this.VacAdd.vacnameen = this.VacnameEn;
    this.VacAdd.start_from = this.VacForm.controls.Time.value;
    this.VacAdd.start_date =  moment(this.VacForm.controls.Date.value).format('YYYY-MM-DD');
    this.VacAdd.hospital = this.VacForm.controls.Hospital.value;
    this.VacAdd.vacdata = this.VacData;

    await this.VacService.AddVaccine(this.VacAdd).subscribe((data) => {
      this.presentAlert("Add Vaccine Success")
      this.loadingService.hide();
    })
    //this.loadingService.hide();
    
  }

}
