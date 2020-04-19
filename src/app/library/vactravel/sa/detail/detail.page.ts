import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

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
  Cost3: string;




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

          if (this.VacDetail.vaccode == "O001") {
            this.Descript = "โรคหัดเกิดจากเชื้อไวรัสที่อยู่ในระบบทางเดินหายใจ สามารถติดต่อจากการไอ จาม เเละการหายใจร่วมกับผู้ป่วย โดยจะมีอาการไข้ ผื่น ตาแดง เเละอาจเกิดโรคแทรกซ้อนได้ เช่น หูอักเสบ ปอดอักเสบ ท้องเดิน สมองอักเสบ และอาจเสียชีวิตจากโรคแทรกซ้อนทางสมองและปอดได้";
            this.Effect = "อาจมีไข้เเละผื่นขึ้นคล้ายโรคหัด ";
            this.After = "ควรให้ทานยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ";
            this.Cost1 = " เข็มละ 700-1,200 บาท";
            this.Cost2 = "เข็มละ 300-700 บาท";
          }
          else if (this.VacDetail.vaccode == "O002") {
            this.Descript = "โรคไข้เหลืองเกิดจากเชื้อไวรัส โดยมีพาหะนำโรค คือยุงลายป่าที่มีเชื้อ สามารถติดเชื้อได้เมื่อถูกยุงที่มีเชื้อกัด โดยจะมีอาการมีไข้เฉียบพลัน หนาวสั่น ปวดหัว ปวดหลัง ปวดกล้ามเนื้อทั่วไป อ่อนแรง ตัวเหลืองตาเหลือง";
            this.Effect = "อาจมีอาการปวดศีรษะเล็กน้อย ปวดเมื่อยตามกล้ามเนื้อ มีไข้";
            this.After = "ควรทานยาลดไข้และเช็ดตัวด้วยน้ำอุ่น";
            this.Cost1 = null;
            this.Cost2 = null;
            this.Cost3 = "เข็มละ 5,000 บาท";
          }
          else if (this.VacDetail.vaccode == "O003") {
            this.Descript = "โรคไวรัสตับอักเสบเอเกิดจากเชื้อไวรัส สามารถได้รับเชื้อผ่านทางอาหารหรือน้ำดื่มที่ปนเปื้อนเชื้อ โดยจะมีอาการ อ่อนเพลีย ไข้ต่ำ เบื่ออาหาร คลื่นไส้อาเจียน เจ็บใต้ชายโครงขวา ปัสสาวะสีเหลืองเข้ม ภาวะตับวายได้ และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการบวมและแดงเล็กน้อยตรงบริเวณที่ฉีด ปวดศีรษะ ครั่นเนื้อครั่นตัว อ่อนเพลีย ไข้ คลื่นไส้ เบื่ออาหาร";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 2,000 บาท";
            this.Cost2 = "เข็มละ 1,800 บาท";
          }
          else if (this.VacDetail.vaccode == "O004") {
            this.Descript = "โรคทัยฟอยด์หรือไข้รากสาดน้อย เกิดจากเชื้อแบคทีเรีย  สามารถติดต่อผ่านทางอาหารและน้ำดื่มที่มีเชื้อปนเปื้อน หรือการสัมผัส โดยจะมีอาการไข้สูง อ่อนเพลีย เบื่ออาหาร แน่นท้อง และท้องเสีย";
            this.Effect = "อาจมีอาการปวดบวมแดง สำหรับผู้เข้ารับวัคซีนชนิดฉีด";
            this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
            this.Cost1 = "เข็มละ 3,000 บาท";
            this.Cost2 = "เข็มละ 700-2,000 บาท";
          }


        },
        error => {
        });
  }

}
