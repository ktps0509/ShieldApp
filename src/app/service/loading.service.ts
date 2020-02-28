import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;
  currentLoading = null;

  constructor(public loadingController: LoadingController) { }

  public async show(messageAlert) {
    this.isLoading = true;

    // Dismiss previously created loading
    const oldmodal = await this.loadingController.getTop();
    if (oldmodal !== undefined) {
      oldmodal.dismiss();
    }
    if (this.currentLoading != null) {
      this.currentLoading.dismiss();
    }
    this.currentLoading = await this.loadingController.create({
      message: messageAlert,
      duration: 8000,
      mode: 'ios'
    });
    return await this.currentLoading.present().then(() => {
      if (!this.isLoading) {
        this.currentLoading.dismiss();
      }
    });
  }

  public async hide() {
    this.isLoading = false;
    const modal = await this.loadingController.getTop();
    if (modal !== undefined) {
      return modal.dismiss();
    }
  } 
}
