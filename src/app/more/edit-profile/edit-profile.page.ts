import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/service/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { LoadingService } from 'src/app/service/loading.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileUser } from 'src/app/Model/profile-user';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  Profile: FormGroup;
  ProfileUser: ProfileUser;
  EmailUser: string;

  age: number;
  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private storage: StorageService,
    private loadingCtrl: LoadingController,
    private VacService: VaccineServiceService,
    private loadingService: LoadingService,
    private localNotifications: LocalNotifications,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loadingService.show("Loading")
    this.createFormFirst();
    console.log("fdakfadsjlfdnkfjasdkjkbjklasdfkaldsj")
    this.loadingService.hide();
    this.VacService.GetCurrentUser().then((data) => {
      console.log(data, "fdafdasfasd")
      this.EmailUser = data.email;
      this.createForm(data);
    })
    this.loadingService.hide()
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }


  createForm(data: ProfileUser) {
    this.Profile = this.fb.group({
      email: [data.email],
      name: [data.name],
      surname: [data.surname],
      birth_date: [data.birth_date],
      blood_type: [data.blood_type],
      drug_al: [data.drug_al],
      sick: [data.sick],
      height: [data.height],
      weight: [data.weight]
    });

  }

  createFormFirst() {
    this.Profile = this.fb.group({
      name: [''],
      surname: [''],
      birth_date: [''],
      blood_type: [''],
      drug_al: [''],
      sick: [''],
      height: [''],
      weight: [''],
    });

  }

  Update() {
    this.loadingService.show("Update User")

    this.age = moment().diff(this.Profile.controls.birth_date.value, 'year')

    this.ProfileUser = Object.assign({}, this.ProfileUser, this.Profile.value);
    this.ProfileUser.birth_date =  moment(this.Profile.controls.birth_date.value).format('YYYY-MM-DD');
    this.ProfileUser.email = this.EmailUser;
    this.ProfileUser.age = this.age;

    return this.VacService.UpdateUser(this.ProfileUser).subscribe((data) => {
      console.log(data)
      this.afAuth.auth.signOut();

      this.storage.remove('User');
      this.storage.clear();
      this.VacService.openSuccess('Log Out');
      this.loadingService.hide();
      this.router.navigate(['/login']);
    })
    // this.ProfileUser.email = this.Profile.controls.email.value;
    // this.ProfileUser.name = this.Profile.controls.name.value;
    // this.ProfileUser.surname = this.Profile.controls.surname.value;
    // this.ProfileUser.birth_date = this.Profile.controls.birth_date.value;
    // this.ProfileUser.blood_type = this.Profile.controls.blood_type.value;
    // this.ProfileUser.drug_al = this.Profile.controls.drug_al.value;
    // this.ProfileUser.sick = this.Profile.controls.sick.value;
    // this.ProfileUser.height = this.Profile.controls.height.value;
    // this.ProfileUser.weight = this.Profile.controls.weight.value;





    // this.ProfileUser = new LoginUser();
    // this.ProfileUser.email = this.UserAccount.email;
    // this.ProfileUser.password = this.UserAccount.password;

    this.VacService.UpdateUser(this.ProfileUser).subscribe(async (data) => {

    })
  }

}
