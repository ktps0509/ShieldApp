import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vac, VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-asia',
  templateUrl: './asia.page.html',
  styleUrls: ['./asia.page.scss'],
})
export class AsiaPage implements OnInit {

  
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
       console.log(this.Type)
      //  this.FormLoad();
       this.FormLoadByType(this.Type)
   });
    
  
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
  this.router.navigate(['../tabs/library/vactravel/asia/detail', { 'code': typeSend}]);
}
}
