import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { VaccineServiceService } from '../service/vaccine-service.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  typeSend: string;
  public imsrc: any;

  constructor(private router: Router,
    private afStorage : AngularFireStorage,
    private VacService: VaccineServiceService) { }

  ngOnInit() {

    this.VacService.getVacImg("rose-blackpink-coachella-2019.jpg").then((url) => { this.imsrc = url });

    // let imsc;
    // const test = this.afStorage.storage.ref("rose-blackpink-coachella-2019.jpg")
    // let imS =  test.getDownloadURL().then((url) => { this.imsrc = url })
    console.log(this.imsrc);
  }

  View(type: number){
    if(type == 1){
      this.typeSend = "A";
      this.router.navigate(['../tabs/library/vacine1/list', { 'type': this.typeSend}]);
    }
    else if(type == 2){
      this.typeSend = "B";
      this.router.navigate(['../tabs/library/vacine2/list', { 'type': this.typeSend}]);
    }
    else if(type == 3){
      this.typeSend = "C"
    }
    else if(type == 4){
      this.typeSend = "D"
    }
    else if(type == 5){
      this.typeSend = "E"
    }
  }

}
