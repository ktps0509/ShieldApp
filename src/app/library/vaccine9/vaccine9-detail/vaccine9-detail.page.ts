import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-vaccine9-detail',
  templateUrl: './vaccine9-detail.page.html',
  styleUrls: ['./vaccine9-detail.page.scss'],
})
export class Vaccine9DetailPage implements OnInit {

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

          if (this.VacDetail.vaccode == "H001") {
            this.Descript = "โรคไข้หวัดใหญ่เกิดจากเชื้อไวรัส สามารถติดเชื้อผ่านทางการไอ จาม จากผู้ป่วย โดยจะมีอาการไข้ หนาวสั่น เจ็บคอ ปวดกล้ามเนื้อ เเละอาจทําให้เกิดปอดบวมและการติดเชื้อในกระเเสโลหิตได้ ";
            this.Effect = "อาจมีไข้ต่ำ อาการคัดจมูก น้ำมูกไหล";
            this.After = "ควรให้ทานยาลดไข้เเละช็ดตัวด้วยน้ำอุ่น";
            this.Cost1 = "เข็มละ 600-1,500 บาท";
            this.Cost2 = "เข็มละ 500-600 บาท";
          }
          else if (this.VacDetail.vaccode == "H002") {
            this.Descript = "โรคพิษสุนัขบ้าเกิดจากเชื้อไวรัสที่อยู่ในน้ำลายของสัตว์ที่เป็นโรคและติดต่อสู่คนโดยเชื้อไวรัสจะเข้าทางบาดแผลที่ถูกกัดหรือรอยถลอกหรือเข้าทางเยื่อบุตา จมูก ปาก โรคนี้มีพาหะที่สำคัญคือ สัตว์เลี้ยงลูกด้วยนมทุกชนิด โดยเริ่มจากมีอาการไข้ กระสับกระส่าย กลืนไม่ได้ ไวต่อสิ่งกระตุ้น ชัก หมดสติ และเป็นอัมพาต จนอาจจะเสียชีวิต";
            this.Effect = "อาจมีอาการบวมแดงหรือรู้สึกปวด";
            this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
            this.Cost1 = "เข็มละ 700- 1,500 บาท";
            this.Cost2 = "เข็มละ 300-500 บาท ";
          }
          else if (this.VacDetail.vaccode == "H003") {
            this.Descript = "โรคไข้สมองอักเสบเจอี เกิดจากเชื้อไวรัสสามารถติดต่อจากการถูกยุงรำคาญกัด โดยจะมีอาการไข้สูง ปวดศีรษะ คอแข็ง กระตุก สั่น มีอาการชัก เป็นอัมพาต หรือมีอาการเพ้อ จนกระทั่งหมดสติและโรคนี้มีความรุนแรงถึงขั้นเสียชีวิตได้";
            this.Effect = "อาจมีอาการปวด บวม แดงบริเวณที่ฉีด มีไข้ อ่อนเพลีย ปวดศีรษะ ปวดเมื่อย คลื่นไส้ เกิดผื่นแพ้แบบลมพิษ";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 1,000-2,000 บาท";
            this.Cost2 = "เข็มละ 300-500 บาท";
          }


        },
        error => {
        });
  }

}
