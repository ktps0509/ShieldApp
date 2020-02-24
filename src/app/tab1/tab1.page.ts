import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,
    private afAuth: AngularFireAuth, ) { }

  ngOnInit() {
    console.log("asdasdasdasdsadassdaasdasdasdasdsad")
  }

  LogOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

}
