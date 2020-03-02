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
    private loadingService: LoadingService) { }

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
