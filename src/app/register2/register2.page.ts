import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileUser } from '../Model/profile-user';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {


  UserAccount: ProfileUser;
  UserAccountForm: FormGroup;

  Name: string

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private VacService: VaccineServiceService,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.createForm();
    this.route.queryParams.subscribe(params => {

      this.UserAccount = new ProfileUser()
      this.UserAccount.name = params.name;
      this.UserAccount.surname = params.surname;
      // this.datepipe.transform(params.birth_date, 'yyyy/MM/dd')
      this.UserAccount.birth_date =  moment(params.birth_date).format('YYYY-MM-DD');
      this.UserAccount.blood_type = params.blood_type;
      this.UserAccount.drug_al = params.drug_al;
      this.UserAccount.sick = params.sick;
      this.UserAccount.age = 22;
      this.UserAccount.height = params.height;
      this.UserAccount.weight = params.weight;
      this.UserAccount.age = params.age;
      
    });
  }

  Login() {

    this.UserAccount.email = this.UserAccountForm.controls.Email.value;
    this.UserAccount.password = this.UserAccountForm.controls.Password.value;


    console.log(this.UserAccount, "ALL")
    this.VacService.Register(this.UserAccount).subscribe((data) => {
      if (data) {
        console.log(data);
        this.router.navigate(['/tabs']);
      }
    })
  }

  createForm() {
    this.UserAccountForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.maxLength(6)]],
      Password2: ['', Validators.required],
    })



  }
}
