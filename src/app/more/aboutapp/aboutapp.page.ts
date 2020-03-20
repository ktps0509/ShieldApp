import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-aboutapp',
  templateUrl: './aboutapp.page.html',
  styleUrls: ['./aboutapp.page.scss'],
})
export class AboutappPage implements OnInit {

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.hide();
  }

}
