import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-vaccine8-detail',
  templateUrl: './vaccine8-detail.page.html',
  styleUrls: ['./vaccine8-detail.page.scss'],
})
export class Vaccine8DetailPage implements OnInit {

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
  Descript2: string;
  Descript3: string;
  Descript4: string;
  Descript5: string;
  Descript6: string;
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

          if (this.VacDetail.vaccode == "I001") {
            this.Descript = "โรคคอตีบ เกิดจากเชื้อแบคทีเรียที่อยู่ภายในเยื่อบุคอ สามารถติดเชื้อผ่านทางน้ำลาย เสมหะ น้ำมูก การหายใจ ไอ หรือ จาม โดยจะมีอาการคออักเสบอย่างรุนแรง อาจทำให้เสียชีวิตจากทางเดินหายใจอุดกั้นได้ หรือจากพิษของเชื้อทำให้กล้ามเนื้อหัวใจอักเสบ หรือปลายประสาทอักเสบได้ ";
            this.Descript2 = "โรคไอกรน เกิดจากเชื้อเเบคทีเรียที่อยู่ในลำคอ สามารถติดเชื้อผ่านทางละอองที่เกิดจากการไอ หรือจาม โดยจะมีอาการไอรุนแรง หายใจเข้ามีเสียงดัง หรือการอาเจียนจากการไอ ตัวเขียว จนหยุดหายใจได้ ";
            this.Descript3 = "โรคบาดทะยัก เกิดจากเชื้อเเบคทีเรียที่อยู่ในดิน ฝุ่นละออง ผิวหนัง และอุจจาระของคน สามารถติดเชื้อผ่านทางบาดแผลโดยเฉพาะบาดแผลที่ลึกเข้าไปในผิวหนัง โดยจะมีอาการกล้ามเนื้อทำงานผิดปกติ ขากรรไกรแข็ง อ้าปากไม่ค่อยได้ เกร็ง ชักกระตุก หรือหยุดหายใจได้"
            this.Effect = "อาจมีไข้ ปวด บวม แดงบริเวณที่ฉีด";
            this.After = "อาจมีไข้ ปวด บวม แดงบริเวณที่ฉีด";
            this.Cost1 = "ราคาเข็มละ 1,000-1,500 บาท";
            this.Cost2 = "ราคาเข็มละ 350-700 บาท";
          }
          else if (this.VacDetail.vaccode == "I002") {
            this.Descript = "โรคไข้หวัดใหญ่เกิดจากเชื้อไวรัส ติดต่อได้ผ่านการหายใจร่วมกัน หรือ การไอ จามโดยมีจะอาการไข้ คัดจมูกและน้ำมูกไหล ไข้หวัดใหญ่จะหายเองได้ภายใน 5-7 วัน แต่หากไม่มีภูมิคุ้มกันอาจเกิดอาการป่วยรุนแรงและมีโรคแทรกซ้อนได้";
            this.Effect = "อาจมีไข้ต่ำ อาการคัดจมูก น้ำมูกไหล";
            this.After = "ควรให้ทานยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภุมิห้อง";
            this.Cost1 = "ราคาเข็มละ 600-1,500 บาท";
            this.Cost2 = "ราคาเข็มละ 500-600 บาท";
          }

        },
        error => {
        });
  }
}
