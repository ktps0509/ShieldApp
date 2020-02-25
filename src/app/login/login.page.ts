import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  LoginUser :  LoginUser;
  loading : any;

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private afStorage : AngularFireStorage,
    private loadingCtrl : LoadingController,
    private fb: FormBuilder,
    private VacService: VaccineServiceService) { }

  ngOnInit() {
    this.createform();
    this.afAuth.authState.subscribe(data => {
      if(data && data.email) {
        this.router.navigate(['/tabs']);
      }
    })

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create();
    return this.loading.present();
  }

  Login(){
    this.presentLoading();
    this.LoginUser = Object.assign({}, this.LoginForm.value);
    this.LoginUser.email = this.LoginForm.controls.Email.value;
    this.LoginUser.password = this.LoginForm.controls.Password.value;

    return this.VacService.LoginAPI(this.LoginUser).subscribe((data) =>{
      console.log(data);
      if(data.login == true){
          console.log(data.data[0],"asdasdasdas");
          const result = this.afAuth.auth.signInWithEmailAndPassword(data.data[0].email, data.data[0].password)
          if(result){
            console.log(result);
            this.loading.dismiss();
            let us = data.data[0].username;
            this.router.navigate(['/tabs']);
          }
          else{
            this.loading.dismiss();
            console.log(data.message)
          }
        
      }
      else{
        this.loading.dismiss();
        console.log(data.message)
      }
    })

  }

  createform(){
    this.LoginForm = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
  }
  


}
