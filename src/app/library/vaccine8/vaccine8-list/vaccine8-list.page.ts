import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-vaccine8-list',
  templateUrl: './vaccine8-list.page.html',
  styleUrls: ['./vaccine8-list.page.scss'],
})
export class Vaccine8ListPage implements OnInit {

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService) { }


  VacList: any[];
  VacListAfter: any[];
  VacType: string;
  Type: any;
  ngOnInit() {
    this.loadingService.show("Loading")
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        this.Type = queryParams.get('type');
        //  this.FormLoad();
        this.FormLoadByType(this.Type)
      });
    this.loadingService.hide()
  }

  FormLoadByType(type: string) {

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
    this.router.navigate(['../tabs/library/vacine8/detail', { 'code': typeSend}]);
  }

}
