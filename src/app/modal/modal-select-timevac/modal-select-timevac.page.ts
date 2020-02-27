import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';

@Component({
  selector: 'app-modal-select-timevac',
  templateUrl: './modal-select-timevac.page.html',
  styleUrls: ['./modal-select-timevac.page.scss'],
})
export class ModalSelectTimevacPage implements OnInit {
  @Input() ModalCode: string;
  CountVac : any[]

  constructor(private modalCtrl: ModalController,
    private navParams: NavParams,
    private VacService: VaccineServiceService) { }

  ngOnInit() {
    this.InitailModal();
  }

  InitailModal(){
    this.ModalCode = this.navParams.get('VacCode');
    console.log(this.ModalCode, "Vactime")
    this.VacService.getVacByCode(this.ModalCode)
    .subscribe(
      data => {
        console.log(data, "afterSELECT")
        this.CountVac = data.data
        console.log(this.CountVac)
      }
    )
}

ItemOptionClick(item: any): void {
  this.modalCtrl.dismiss(item,  'VacSelect');
}

DimissModal() {
  this.CountVac = [];
  this.modalCtrl.dismiss({
    dismissed: true
  });
}
}
