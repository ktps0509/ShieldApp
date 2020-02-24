import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { LoginUser } from '../Model/login-user';
import { VaccineServiceService } from '../service/vaccine-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  LoginUser :  LoginUser;

  constructor(private router: Router,
    private fb: FormBuilder,
    private VacService: VaccineServiceService) { }

  ngOnInit() {
    this.createform();
  }

  Login(){
    this.LoginUser = Object.assign({}, this.LoginForm.value);
    this.LoginUser.username = this.LoginForm.controls.Email.value;
    this.LoginUser.password = this.LoginForm.controls.Password.value;

    return this.VacService.LoginAPI(this.LoginUser).subscribe((data) =>{
      console.log(data);
      if(data.login == true){
        this.router.navigate(['/tabs']);
      }
      else{
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
