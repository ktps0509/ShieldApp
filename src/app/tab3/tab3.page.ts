import { Component } from '@angular/core';
import { ModalController, ActionSheetController, NavController } from '@ionic/angular';
import { ModalSelectVacPage } from '../modal/modal-select-vac/modal-select-vac.page';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  VacForm : FormGroup;
  VacSelect: any[]

  constructor(public modalController: ModalController,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    
  }

  createForm(){
    this.VacForm = this.fb.group({
      Date: [""],
      Vaccine: [""],
      Hospital: [""]
    })
  }

  async ModalSelectVaccine() {

    const modal = await this.modalController.create({
      component: ModalSelectVacPage,
      componentProps: {
        'type': 'A'
      }
    });
    modal.onDidDismiss().then(data => {
      var VacSelect = data.data
      console.log(VacSelect)
      if (data.data.dismissed !== true) {
        this.VacForm.controls.Vaccine.setValue(VacSelect.vacnameth)
        
      }
    });
    return await modal.present();
  }

}
