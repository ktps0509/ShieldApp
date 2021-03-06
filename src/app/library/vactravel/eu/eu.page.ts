import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vac, VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.page.html',
  styleUrls: ['./eu.page.scss'],
})
export class EuPage implements OnInit {

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService) { }

  VacList: any[];
  VacListAfter: any[];
  VacType: string;
  Type: any;
  ngOnInit() {
    this.loadingService.show("Loading");
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        this.Type = queryParams.get('type');
        console.log(this.Type)
        //  this.FormLoad();
        this.FormLoadByType(this.Type)
      });

      this.loadingService.hide();
  }

  FormLoadByType(type: string){

    return this.vacService.getVacLisyByType2(type).pipe(first())
    .subscribe(
      data => {
        this.VacList = data.data;
        console.log(this.VacList)
        this.VacType = this.VacList[0].vacage;
      },
      error => {
      });
}

View(typeSend: string){
  this.router.navigate(['../tabs/library/vactravel/eu/detail', { 'code': typeSend}]);
}

}
