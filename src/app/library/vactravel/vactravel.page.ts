import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';

@Component({
  selector: 'app-vactravel',
  templateUrl: './vactravel.page.html',
  styleUrls: ['./vactravel.page.scss'],
})
export class VactravelPage implements OnInit {

  typeSend: string;

  constructor(private router: Router,
    private afStorage : AngularFireStorage,
    private VacService: VaccineServiceService) { }

  ngOnInit() {

  }

  View(type: number){
    if(type == 1){
      this.typeSend = "L";
      this.router.navigate(['../tabs/library/vactravel/africa', { 'type': this.typeSend}]);
    }
    else if(type == 2){
      this.typeSend = "M";
      this.router.navigate(['../tabs/library/vactravel/na', { 'type': this.typeSend}]);
    }
    else if(type == 3){
      this.typeSend = "O";
      this.router.navigate(['../tabs/library/vactravel/sa', { 'type': this.typeSend}]);
    }
    else if(type == 4){
      this.typeSend = "N";
      this.router.navigate(['../tabs/library/vactravel/aus', { 'type': this.typeSend}]);
    }
    else if(type == 5){
      this.typeSend = "P";
      this.router.navigate(['../tabs/library/vactravel/asia', { 'type': this.typeSend}]);
    }
    else if(type == 6){
      this.typeSend = "Q";
      this.router.navigate(['../tabs/library/vactravel/eu', { 'type': this.typeSend}]);
    }
  }

}
