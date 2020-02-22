import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vac, VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-vacine1-list',
  templateUrl: './vacine1-list.page.html',
  styleUrls: ['./vacine1-list.page.scss'],
})
export class Vacine1ListPage implements OnInit {

private Vacs: Observable<Vac[]>;

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  VacList: any[];
  VacListAfter : any[];
  VacType : string;
  Type : any;
  ngOnInit() {

    this.activatedRoute.paramMap
    .subscribe((queryParams: ParamMap) => {
       this.Type = queryParams.get('type');
      //  this.FormLoad();
       this.FormLoadByType(this.Type)
   });
    
  
  }

  // FormLoad(){

  //       return this.vacService.getVacs().pipe(first())
  //       .subscribe(
  //         data => {
  //           this.VacList = data.data;
  //           console.log(this.VacList)
  //           this.VacType = this.VacList[0].vactype;
  //         },
  //         error => {
  //         });
  // }

  FormLoadByType(type: string){

    return this.vacService.getVacLisyByType(type).pipe(first())
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
  console.log(typeSend, "ADSADSADADS")
  this.router.navigate(['../tabs/library/vacine1/detail', { 'code': typeSend}]);
}



}

