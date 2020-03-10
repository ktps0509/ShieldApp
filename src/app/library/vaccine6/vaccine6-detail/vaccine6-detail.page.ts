import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-vaccine6-detail',
  templateUrl: './vaccine6-detail.page.html',
  styleUrls: ['./vaccine6-detail.page.scss'],
})
export class Vaccine6DetailPage implements OnInit {

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private loadingService: LoadingService) { }


  Code: any;
  VacDetail: any;
  VacHeadTH: string;
  VacHeadEN: string;
  VacTotal: string;
  VacAge: string;

  Descript: string;
  Effect: string;
  After: string;
  Cost1: string;
  Cost2: string;




  ngOnInit() {
    this.loadingService.show("Loading");
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        this.Code = queryParams.get('code');
        this.FormLoadByCode(this.Code)
      });
    this.loadingService.hide();
  }

  FormLoadByCode(code: string) {

    return this.vacService.getVacByCode(code).pipe(first())
      .subscribe(
        data => {
          console.log(data.data, "DDDDD")
          this.VacDetail = data.data[0];
          console.log(this.VacDetail, "Detail")

          this.VacHeadTH = this.VacDetail.vacnameth;
          this.VacHeadEN = this.VacDetail.vacnameen;
          this.VacTotal = this.VacDetail.vactotal;
          this.VacAge = this.VacDetail.vacage;

          if (this.VacDetail.vaccode == "F001") {
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F002"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F003"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F004"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F005"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F006"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
          else if(this.VacDetail.vaccode == "F007"){
            this.Descript = null;
            this.Effect = null;
            this.After = null;
            this.Cost1 = null;
            this.Cost2 = null;
          }
        },
        error => {
        });


  }


}
