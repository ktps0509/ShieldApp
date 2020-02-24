import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ProfileUser } from '../Model/profile-user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  UserProfile: FormGroup

  ProfileUser: ProfileUser;

  constructor(private fb: FormBuilder,
    private router: Router,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.createForm()
  }

  Next(){
    this.ProfileUser = Object.assign({}, this.UserProfile.value);
    this.ProfileUser.name = this.UserProfile.controls.name.value;
    this.ProfileUser.surname = this.UserProfile.controls.surname.value;
    this.ProfileUser.birth_date = this.UserProfile.controls.birth_date.value;
    this.ProfileUser.blood_type = this.UserProfile.controls.blood_type.value;
    this.ProfileUser.drug_al = this.UserProfile.controls.drug_al.value;
    this.ProfileUser.sick = this.UserProfile.controls.sick.value;

    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: JSON.stringify(this.ProfileUser.name),
        surname: JSON.stringify(this.ProfileUser.surname),
        birth_date: JSON.stringify(this.ProfileUser.birth_date),
        blood_type: JSON.stringify(this.ProfileUser.blood_type),
        drug_al: JSON.stringify(this.ProfileUser.drug_al),
        sick: JSON.stringify(this.ProfileUser.sick),
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
      drug_al : ['', Validators.required],
      sick : ['', Validators.required],
    })


  }

}
