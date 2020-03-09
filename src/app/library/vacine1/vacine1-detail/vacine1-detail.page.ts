import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vacine1-detail',
  templateUrl: './vacine1-detail.page.html',
  styleUrls: ['./vacine1-detail.page.scss'],
})
export class Vacine1DetailPage implements OnInit {

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }


    Code : any;
    VacDetail: any;
    VacHeadTH: string;
    VacHeadEN: string;
    VacTotal: string;
    VacAge: string;


  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe((queryParams: ParamMap) => {
       this.Code = queryParams.get('code');
       this.FormLoadByCode(this.Code)
   });
  }

  FormLoadByCode(code: string){

    return this.vacService.getVacByCode(code).pipe(first())
    .subscribe(
      data => {
        console.log(data.data, "DDDDD")
        this.VacDetail = data.data[0];
        console.log(this.VacDetail,"Detail")

        this.VacHeadTH = this.VacDetail.vacnameth;
        this.VacHeadEN = this.VacDetail.vacnameen;
        this.VacTotal = this.VacDetail.vactotal;
        this.VacAge = this.VacDetail.vacage;

      },
      error => {
      });


  }

}
