import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';


@Component({
  selector: 'app-vaccine6-detail',
  templateUrl: './vaccine6-detail.page.html',
  styleUrls: ['./vaccine6-detail.page.scss'],
})
export class Vaccine6DetailPage implements OnInit {

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

          if (this.VacDetail.vaccode == "F001") {
            this.Descript = "โรคคอตีบ : เกิดจากเชื้อแบคทีเรียที่อยู่ภายในเยื่อบุคอ สามารถติดเชื้อผ่านทางน้ำลาย เสมหะ น้ำมูก การหายใจ ไอ หรือ จาม โดยจะมีอาการคออักเสบอย่างรุนแรง อาจทำให้เสียชีวิตจากทางเดินหายใจอุดกั้นได้ หรือจากพิษของเชื้อทำให้กล้ามเนื้อหัวใจอักเสบ หรือปลายประสาทอักเสบได้";
            this.Descript2 = "โรคไอกรน : เกิดจากเชื้อเเบคทีเรียที่อยู่ในลำคอ สามารถติดเชื้อผ่านทางละอองที่เกิดจากการไอ หรือจาม โดยจะมีอาการไอรุนแรง หายใจเข้ามีเสียงดัง หรือการอาเจียนจากการไอ ตัวเขียว จนหยุดหายใจได้";
            this.Descript3 = "โรคบาดทะยัก : เกิดจากเชื้อเเบคทีเรียที่อยู่ในดิน ฝุ่นละออง ผิวหนัง และอุจจาระของคน สามารถติดเชื้อผ่านทางบาดแผลโดยเฉพาะบาดแผลที่ลึกเข้าไปในผิวหนัง โดยจะมีอาการกล้ามเนื้อทำงานผิดปกติ ขากรรไกรแข็ง อ้าปากไม่ค่อยได้ เกร็ง ชักกระตุก หรือหยุดหายใจได้";
            this.Effect = "อาจมีไข้ ปวด บวม แดงบริเวณที่ฉีด";
            this.After = "ควรให้ยาลดไข้ เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 1,000-1,500 บาท";
            this.Cost2 = "เข็มละ 350-700 บาท";
          }
          else if(this.VacDetail.vaccode == "F002"){
            this.Descript = "โรคงูสวัดเกิดจากเชื้อไวรัส สามารถติดต่อผ่านการสัมผัสตุ่มน้ำใสจากผู้ป่วย โดยจะมีอาการเป็นผื่น ตุ่มน้ำ ปวดแสบปวดร้อน ติดต่อทางการสัมผัส เนื่องจากในแผลที่มีตุ่มน้ำใสนั้น ยังสามารถพบเชื้อไวรัสได้";
            this.Effect = "อาจมีอาการปวด บวม แดง บริเวณที่ได้รับการฉีดยา";
            this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
            this.Cost1 = "เข็มละ 3,000-4,000 บาท";
            this.Cost2 = "เข็มละ 2,000 บาท";
          }
          else if(this.VacDetail.vaccode == "F003"){
            this.Descript = "โรคอีสุกอีใสเกิดจากเชื้อไวรัส สามารถติดต่อได้ทางน้ำลาย ไอ จาม การหายใจ เเละการสัมผัสกับแผลของผู้ป่วยที่เป็นโรค โดยจะมีอาการ ปวดศีรษะ เบื่ออาหาร มีไข้ และมีผื่นขึ้นที่ผิวหนัง ลักษณะผื่นระยะแรกเป็นตุ่มนูนแดงกระจายตามลำตัวมากกว่าที่หน้าหรือแขนขา ตุ่มอาจเกิดขึ้นในปากและลำคอได้ นอกจากนี้ยังมีความเสี่ยงที่จะติดเชื้อแบคทีเรียบนผื่น แล้วเข้ากระแสเลือด ทำให้ปอดอักเสบ เเละสมองอักเสบได้";
            this.Effect = "อาจมีไข้ต่ำ อาการคัดจมูก น้ำมูกไหล";
            this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
            this.Cost1 = "เข็มละ 1,300-2,000 บาท";
            this.Cost2 = "เข็มละ 800-1,000 บาท";
          }
          else if(this.VacDetail.vaccode == "F004"){
            this.Descript = "โรคไข้หวัดใหญ่เกิดจากเชื้อไวรัส ติดต่อได้ผ่านการหายใจร่วมกัน หรือ การไอ จามโดยมีจะอาการไข้ คัดจมูกและน้ำมูกไหล ไข้หวัดใหญ่จะหายเองได้ภายใน 5-7 วัน แต่หากไม่มีภูมิคุ้มกันอาจเกิดอาการป่วยรุนแรงและมีโรคแทรกซ้อนได้";
            this.Effect = "อาจมีอาการปวด บวม แดง บริเวณที่ได้รับการฉีดยา";
            this.After = "ควรให้ทานยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง";
            this.Cost1 = "เข็มละ 600-1,500 บาท";
            this.Cost2 = "เข็มละ 500-600 บาท";
          }
          // else if(this.VacDetail.vaccode == "F005"){
          //   this.Descript = "โรคงูสวัดเกิดจากเชื้อไวรัส สามารถติดต่อผ่านการสัมผัสตุ่มน้ำใสจากผู้ป่วย โดยจะมีอาการเป็นผื่น ตุ่มน้ำ ปวดแสบปวดร้อน ติดต่อทางการสัมผัส เนื่องจากในแผลที่มีตุ่มน้ำใสนั้น ยังสามารถพบเชื้อไวรัสได้";
          //   this.Effect = "อาจมีอาการปวด บวม แดง บริเวณที่ได้รับการฉีดยา";
          //   this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
          //   this.Cost1 = "ราคา 3,000 – 4,000 บาท";
          //   this.Cost2 = "เข็มละ 2,000 บาท  ";
          // }
          else if(this.VacDetail.vaccode == "F006"){
            this.Descript = "ไวรัสตับอักเสบบีเกิดจากเชื้อไวรัสที่อยู่ภายในเลือด สามารถติดเชื้อผ่านทางเลือด โดยจะมีอาการอ่อนเพลีย เบื่ออาหาร มีไข้ต่ำ ปวดท้อง ตัวเหลือง ตาเหลือง และอาจเป็นโรคตับแข็งและมะเร็งตับได้";
            this.Effect = "อาจมีอาการปวด บวม บริเวณที่ฉีด หรือมีไข้ต่ำประมาณ 1-2 วัน";
            this.After = "ควรให้ทานยาลดไข้ และเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 600-1,200 บาท";
            this.Cost2 = "เข็มละ 300-500 บาท";
          }
          else if(this.VacDetail.vaccode == "F007"){
            this.Descript = "โรคปอดอักเสบ เกิดจากเชื้อไวรัส สามารถติดต่อผ่านจากการไอหรือการ โดยจะมีอาการไอ มีเสมหะ เจ็บหน้าอกขณะหายใจหรือไอ มีไข้ เหงื่อออก หนาวสั่น คลื่นไส้ อาเจียนหรือท้องเสีย ทำให้อาจเป็นโรคเยื่อหุ้มสมองอักเสบ ปอดอักเสบ ติดเชื้อในกระแสเลือด และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการบวมเเดงบริเวณที่ฉีด";
            this.After = "ควรประคบเย็นบริเวณที่บวมเเดง";
            this.Cost1 = "ราคา 3,000-4,500 บาท";
            this.Cost2 = "เข็มละ 2,000-3,000บาท";
          }
        },
        error => {
        });


  }


}
