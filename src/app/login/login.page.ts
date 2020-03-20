import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { StorageService } from '../service/storage.service';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  LoginUser: LoginUser;
  loading: any;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afStorage: AngularFireStorage,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private VacService: VaccineServiceService,
    private storage: StorageService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.createform();
  }


  Register(){
    this.loadingService.show("Loading");
    this.router.navigate(['/register']);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  async presentAlert(al : string) {
    let alert = await this.alertCtrl.create({
      message : al,
      buttons: ['Dismiss']
    });
    return alert.present();
  }

  Login() {
    this.presentLoading();
    this.LoginUser = Object.assign({}, this.LoginForm.value);
    this.LoginUser.email = this.LoginForm.controls.Email.value;
    this.LoginUser.password = this.LoginForm.controls.Password.value;

    return this.VacService.LoginAPI(this.LoginUser).subscribe((data) => {
      if (data.login == true) {
        const result = this.afAuth.auth.signInWithEmailAndPassword(data.data[0].email, data.data[0].password)
        if (result) {
          this.loading.dismiss();
          this.storage.set('User', data.data[0]).then(() => {
            this.router.navigate(['/tabs/tab1']);
          });
        }
        else {
          this.loading.dismiss();

        }

      }
      else {
        this.loading.dismiss();
        this.presentAlert(data.message)
      }
    })

  }

  createform() {
    this.LoginForm = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
  }



}
