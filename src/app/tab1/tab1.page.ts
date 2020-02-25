import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfileUser } from '../Model/profile-user';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  UserAccount: ProfileUser;

  Name: string;
  Surname : string;

  BirthDay : string;
  Age : number;
  BloodGroup : string;
  Sick: string;
  Medic: string;
  Weight : number;
  Height : number;


  loading : any;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private storage: StorageService,
    private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.storage.get('User').then(async (val) => {
      console.log(val.name, "ABCA")
      this.UserAccount = new ProfileUser();
      this.Name = val.name;
      this.Surname = val.surname;
      this.BirthDay = val.birth_date
      this.BloodGroup = val.blood_type
      this.Medic = val.drug_al
      this.Sick = val.sick
      this.Height = val.height
      this.Weight = val.weight
      this.Age = val.age


    });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  LogOut() {
    this.afAuth.auth.signOut();
    this.storage.remove('User');
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  

}
