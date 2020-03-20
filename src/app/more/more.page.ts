import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from '../service/storage.service';
import { VaccineServiceService } from '../service/vaccine-service.service';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private storage: StorageService,
    private loadingCtrl: LoadingController,
    private VacService: VaccineServiceService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }

  EditProfile() {
    this.loadingService.show("Loading");
    this.router.navigate(['tabs/more/edit-profile']);
  }

  About() {
    this.loadingService.show("Loading");
    this.router.navigate(['tabs/more/aboutapp']);
  }

  LogOut() {
    this.loadingService.show("Sign Out");
    this.afAuth.auth.signOut();
    this.storage.remove('User');
    this.storage.clear();
    this.VacService.openSuccess('Log Out');
    this.loadingService.hide();
    this.router.navigate(['/login']);
  }

}
