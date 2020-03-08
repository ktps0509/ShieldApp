import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-modal-select-vac',
  templateUrl: './modal-select-vac.page.html',
  styleUrls: ['./modal-select-vac.page.scss'],
})
export class ModalSelectVacPage implements OnInit {
  @Input() ModalCode: string;

  VacList: any[]


  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private VacService: VaccineServiceService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.InitailModal();
    
  }

  InitailModal(){
    this.ModalCode = this.navParams.get('type');
    console.log(this.ModalCode, "ModalMana")
    this.VacService.getVacLisyByType(this.ModalCode)
    .subscribe(
      data => {
        this.VacList = data.data
        console.log(this.VacList)
      }
    )
    this.loadingService.hide();
  }

  ItemOptionClick(item: any): void {
    this.modalCtrl.dismiss(item,  'VacSelect');
  }

  DimissModal() {
    console.log("AHdasfjlashdflk")
    this.VacList = [];
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
