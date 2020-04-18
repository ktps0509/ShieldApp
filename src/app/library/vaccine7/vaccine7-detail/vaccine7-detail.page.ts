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
            this.Descript = "โรคอีสุกอีใสเกิดจากเชื้อไวรัส สามารถติดต่อได้ทางน้ำลาย ไอ จาม การหายใจ เเละการสัมผัสกับแผลของผู้ป่วยที่เป็นโรค โดยจะมีอาการ ปวดศีรษะ เบื่ออาหาร มีไข้ และมีผื่นขึ้นที่ผิวหนัง ลักษณะผื่นระยะแรกเป็นตุ่มนูนแดงกระจายตามลำตัวมากกว่าที่หน้าหรือแขนขา ตุ่มอาจเกิดขึ้นในปากและลำคอได้ นอกจากนี้ยังมีความเสี่ยงที่จะติดเชื้อแบคทีเรียบนผื่น แล้วเข้ากระแสเลือด ทำให้ปอดอักเสบ เเละสมองอักเสบได้";
            this.Effect = "อาจมีอาการบวมและแดงเล็กน้อยตรงบริเวณที่ฉีด ปวดศีรษะ ครั่นเนื้อครั่นตัว อ่อนเพลีย ไข้ คลื่นไส้ เบื่ออาหาร";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "ราคาเข็มละ 2,000 บาท";
            this.Cost2 = "ราคาเข็มละ 1,800 บาท";
          }
          else if (this.VacDetail.vaccode == "K002") {
            this.Descript = "โรคปอดอักเสบ เกิดจากเชื้อไวรัส สามารถติดต่อผ่านจากการไอหรือการ โดยจะมีอาการไอ มีเสมหะ เจ็บหน้าอกขณะหายใจหรือไอ มีไข้ เหงื่อออก หนาวสั่น คลื่นไส้ อาเจียนหรือท้องเสีย ทำให้อาจเป็นโรคเยื่อหุ้มสมองอักเสบ ปอดอักเสบ ติดเชื้อในกระแสเลือด และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการบวมเเดงบริเวณที่ฉีด";
            this.After = "ควรประคบเย็นบริเวณที่บวมเเดง";
            this.Cost1 = "ราคาเข็มละ 2,000 – 3,000บาท";
            this.Cost2 = "ราคา 3,000 – 4,500 บาท";
          }
        },
        error => {
        });


  }


}
