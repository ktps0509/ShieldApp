import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-vaccine7-detail',
  templateUrl: './vaccine7-detail.page.html',
  styleUrls: ['./vaccine7-detail.page.scss'],
})
export class Vaccine7DetailPage implements OnInit {

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

    return this.vacService.getVacByCode2(code).pipe(first())
      .subscribe(
        data => {
          console.log(data.data, "DDDDD")
          this.VacDetail = data.data[0];
          console.log(this.VacDetail, "Detail")

          this.VacHeadTH = this.VacDetail.vacnameth;
          this.VacHeadEN = this.VacDetail.vacnameen;
          this.VacTotal = this.VacDetail.vactotal;
          this.VacAge = this.VacDetail.vacage;

          if (this.VacDetail.vaccode == "K001") {
            this.Descript = "โรคไวรัสตับอักเสบเอเกิดจากเชื้อไวรัส สามารถได้รับเชื้อผ่านทางอาหารหรือน้ำดื่มที่ปนเปื้อนเชื้อ โดยจะมีอาการ อ่อนเพลีย ไข้ต่ำ เบื่ออาหาร คลื่นไส้อาเจียน เจ็บใต้ชายโครงขวา ปัสสาวะสีเหลืองเข้ม ภาวะตับวายได้ และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการบวมและแดงเล็กน้อยตรงบริเวณที่ฉีด ปวดศีรษะ ครั่นเนื้อครั่นตัว อ่อนเพลีย ไข้ คลื่นไส้ เบื่ออาหาร";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 2,000 บาท";
            this.Cost2 = "เข็มละ 1,800 บาท";
          }
          else if (this.VacDetail.vaccode == "K002") {
            this.Descript = "โรคปอดอักเสบ เกิดจากเชื้อไวรัส สามารถติดต่อผ่านจากการไอหรือการ โดยจะมีอาการไอ มีเสมหะ เจ็บหน้าอกขณะหายใจหรือไอ มีไข้ เหงื่อออก หนาวสั่น คลื่นไส้ อาเจียนหรือท้องเสีย ทำให้อาจเป็นโรคเยื่อหุ้มสมองอักเสบ ปอดอักเสบ ติดเชื้อในกระแสเลือด และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการบวมเเดงบริเวณที่ฉีด";
            this.After = "ควรประคบเย็นบริเวณที่บวมเเดง";
            this.Cost1 = "เข็มละ 2,000-3,000 บาท";
            this.Cost2 = "ราคา 3,000-4,500 บาท";
          }
        },
        error => {
        });


  }


}
