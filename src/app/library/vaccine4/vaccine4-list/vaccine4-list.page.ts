import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-vaccine4-list',
  templateUrl: './vaccine4-list.page.html',
  styleUrls: ['./vaccine4-list.page.scss'],
})
export class Vaccine4ListPage implements OnInit {

  constructor(private vacService: VaccineServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  VacList: any[];
  VacListAfter: any[];
  VacType: string;
  Type: any;
  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe((queryParams: ParamMap) => {
        this.Type = queryParams.get('type');
        //  this.FormLoad();
        console.log(this.Type, "afjkasdhfkljsadhfjlkjhafsdljks")
        this.FormLoadByType(this.Type)
      });
  }

  FormLoadByType(type: string) {

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

}
