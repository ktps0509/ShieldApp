import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ProfileUser } from '../Model/profile-user';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  UserProfile: FormGroup

  ProfileUser: ProfileUser;

  age: number;
  constructor(private fb: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    
    ) { }

  ngOnInit() {
    this.createForm()
  }

  Next(){

    this.age = moment().diff(this.UserProfile.controls.birth_date.value, 'year')

    console.log(this.age, "อายุวันนัง")

    const navigationExtras: NavigationExtras = {
      queryParams: {
       name: this.UserProfile.controls.name.value,
       surname: this.UserProfile.controls.surname.value,
       birth_date: this.UserProfile.controls.birth_date.value,
       blood_type: this.UserProfile.controls.blood_type.value,
       drug_al: this.UserProfile.controls.drug_al.value,
       sick: this.UserProfile.controls.sick.value,
       weight: this.UserProfile.controls.weight.value,
       height: this.UserProfile.controls.height.value,
       age : this.age
      }
    };
    this.navCtrl.navigateForward(['/register2'], navigationExtras);

  }

  createForm(){
    this.UserProfile = this.fb.group({
      name : ['', Validators.required],
      surname : ['', Validators.required],
      birth_date : ['', Validators.required],
      blood_type : ['', Validators.required],
      drug_al : [''],
      sick : [''],
      weight : ['', Validators.required],
      height : ['', Validators.required]
    })


  }

}
