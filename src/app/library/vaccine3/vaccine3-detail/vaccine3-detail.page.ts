import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-vaccine3-detail',
  templateUrl: './vaccine3-detail.page.html',
  styleUrls: ['./vaccine3-detail.page.scss'],
})
export class Vaccine3DetailPage implements OnInit {

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

          if (this.VacDetail.vaccode == "C001") {
            this.Descript = "โรคมะเร็งปากมดลูกเกิดจากเชื้อไวรัส สามารถติดเชื้อได้จากการมีเพศสัมพันธ์ตั้งแต่อายุยังน้อย โดยจะมีก้อนเนื้อเกิดขึ้นบริเวณมดลูก ช่องคลอด หรือช่องปากมดลูก โดยจะมีอาการตกขาวมีเลือดหรือหนองปน ช่องคลอดมีกลิ่นผิดปกติ เบื่ออาหาร น้ำหนักลด ปัสสาวะมีเลือดปน และอาจเสียชีวิตได้"
            this.Effect = "อาจมีอาการไข้ ปวด บวม ผื่นแดง และคันบริเวณที่ฉีด";
            this.After = "ควรให้ยาลดไข้ เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 3,000-5,000 บาท";
            this.Cost2 = "เข็มละ 1,500-2,000 บาท"
          }
          else if (this.VacDetail.vaccode == "C002") {
            this.Descript = "โรคไข้หวัดใหญ่เกิดจากเชื้อไวรัส ติดต่อได้ผ่านการหายใจร่วมกัน หรือ การไอ จามโดยมีจะอาการไข้ คัดจมูกและน้ำมูกไหล ไข้หวัดใหญ่จะหายเองได้ภายใน 5-7 วัน แต่หากไม่มีภูมิคุ้มกันอาจเกิดอาการป่วยรุนแรงและมีโรคแทรกซ้อนได้";
            this.Effect = "อาจมีไข้ต่ำ อาการคัดจมูก น้ำมูกไหล";
            this.After = "ควรให้ทานยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง";
            this.Cost1 = " เข็มละ 600-1,500 บาท";
            this.Cost2 = "เข็มละ 500-600 บาท";
          }
        },
        error => {
        });


  }

}
