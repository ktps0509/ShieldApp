import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';



@Component({
  selector: 'app-vaccine11-detail',
  templateUrl: './vaccine11-detail.page.html',
  styleUrls: ['./vaccine11-detail.page.scss'],
})
export class Vaccine11DetailPage implements OnInit {

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

          if (this.VacDetail.vaccode == "G001") {
            this.Descript = "ไวรัสตับอักเสบบีเกิดจากเชื้อไวรัสที่อยู่ภายในเลือด สามารถติดเชื้อผ่านทางเลือด โดยจะมีอาการอ่อนเพลีย เบื่ออาหาร มีไข้ต่ำ ปวดท้อง ตัวเหลือง ตาเหลือง และอาจเป็นโรคตับแข็งและมะเร็งตับได้";
            this.Effect = "อาจมีอาการปวด บวม บริเวณที่ฉีด หรือมีไข้ต่ำประมาณ 1-2วัน";
            this.After = "ควรให้ทานยาลดไข้ และเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้ธีประคบเย็น";
            this.Cost1 = "ราคาเข็มละ 600-1,200 บาท";
            this.Cost2 = "ราคาเข็มละ 300-500 บาท";
          }
          else if (this.VacDetail.vaccode == "G002") {
            this.Descript = "โรคไข้หวัดใหญ่เกิดจากเชื้อไวรัส สามารถติดเชื้อผ่านทางการไอ จาม จากผู้ป่วย โดยจะมีอาการไข้ หนาวสั่น เจ็บคอ ปวดกล้ามเนื้อ เเละอาจทําให้เกิดปอดบวมและการติดเชื้อในกระเเสโลหิตได้ ";
            this.Effect = "อาจมีไข้ต่ำ อาการคัดจมูก น้ำมูกไหล";
            this.After = "ควรให้ทานยาลดไข้เเละช็ดตัวด้วยน้ำอุ่น";
            this.Cost1 = "ราคาเข็มละ 600-1,500 บาท";
            this.Cost2 = "ราคาเข็มละ 500-600 บาท";
          }
          else if (this.VacDetail.vaccode == "G003") {
            this.Descript = "โรคหัด : เกิดจากเชื้อไวรัสที่อยู่ในระบบทางเดินหายใจ สามารถติดต่อจากการไอ จาม เเละการหายใจร่วมกับผู้ป่วย โดยจะมีอาการไข้ ผื่น ตาแดง เเละอาจเกิดโรคแทรกซ้อนได้ เช่น หูอักเสบ ปอดอักเสบ ท้องเดิน สมองอักเสบ และอาจเสียชีวิตจากโรคแทรกซ้อนทางสมองและปอดได้  ";
            this.Descript2 = "โรคคางทูม : เกิดจากเชื้อไวรัส ทำให้เกิดอาการอักเสบของต่อมน้ำลายส่วนมากเกิดที่ต่อมน้ำลายบริเวณกกหู หรืออาจเกิดโรคเยื่อหุ้มสมองอักเสบได้ แต่มักไม่รุนแรงถึงขั้นเสียชีวิต "
            this.Descript3 = "โรคหัดเยอรมัน : เกิดจากเชื้อไวรัส สามารถติดต่อได้ง่ายจากการสัมผัสเเละการหายใจร่วมกับผู้ป่วย ผู้ที่ติดเชื้อจะมีอาการปวดศีรษะ ปวดเมื่อย ไข้ต่ำๆ ตุ่มน้ำ"
            this.Effect = "อาจมีไข้เเละผื่นขึ้นคล้ายโรคหัด ";
            this.After = "ควรให้ทานยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ";
            this.Cost1 = "ราคาเข็มละ 700-1,200 บาท";
            this.Cost2 = "ราคาเข็มละ 300-700 บาท";
          }
          else if (this.VacDetail.vaccode == "G004") {
            this.Descript = "โรคอีสุกอีใสเกิดจากเชื้อไวรัส สามารถติดต่อได้ทางน้ำลาย ไอ จาม การหายใจ เเละการสัมผัสกับแผลของผู้ป่วยที่เป็นโรค โดยจะมีอาการ ปวดศีรษะ เบื่ออาหาร มีไข้ และมีผื่นขึ้นที่ผิวหนัง ลักษณะผื่นระยะแรกเป็นตุ่มนูนแดงกระจายตามลำตัวมากกว่าที่หน้าหรือแขนขา ตุ่มอาจเกิดขึ้นในปากและลำคอได้ นอกจากนี้ยังมีความเสี่ยงที่จะติดเชื้อแบคทีเรียบนผื่น แล้วเข้ากระแสเลือด ปอดอักเสบ เเละสมองอักเสบได้";
            this.Effect = "อาจมีอาการเจ็บปวด บวม หรือแดงบริเวณที่ฉีด";
            this.After = "ควรประคบเย็นบริเวณที่มีอาการปวดบวมเเดง";
            this.Cost1 = "ราคาเข็มละ 1,300 – 2,000 บาท";
            this.Cost2 = "ราคาเข็มละ 800-1,000 บาท";
          }
          else if (this.VacDetail.vaccode == "G005") {
            this.Descript = "โรคคอตีบ : เกิดจากเชื้อแบคทีเรียที่อยู่ภายในเยื่อบุคอ สามารถติดเชื้อผ่านทางน้ำลาย เสมหะ น้ำมูก การหายใจ ไอ หรือ จาม โดยจะมีอาการคออักเสบอย่างรุนแรง อาจทำให้เสียชีวิตจากทางเดินหายใจอุดกั้นได้ หรือจากพิษของเชื้อทำให้กล้ามเนื้อหัวใจอักเสบ หรือปลายประสาทอักเสบได้";
            this.Descript2 = "โรคไอกรน : เกิดจากเชื้อเเบคทีเรียที่อยู่ในลำคอ สามารถติดเชื้อผ่านทางละอองที่เกิดจากการไอ หรือจาม โดยจะมีอาการไอรุนแรง หายใจเข้ามีเสียงดัง หรือการอาเจียนจากการไอ ตัวเขียว จนหยุดหายใจได้";
            this.Descript3 = "โรคบาดทะยัก : เกิดจากเชื้อเเบคทีเรียที่อยู่ในดิน ฝุ่นละออง ผิวหนัง และอุจจาระของคน สามารถติดเชื้อผ่านทางบาดแผลโดยเฉพาะบาดแผลที่ลึกเข้าไปในผิวหนัง โดยจะมีอาการกล้ามเนื้อทำงานผิดปกติ ขากรรไกรแข็ง อ้าปากไม่ค่อยได้ เกร็ง ชักกระตุก หรือหยุดหายใจได้";
            this.Effect = "อาจมีไข้ ปวด บวม แดงบริเวณที่ฉีดวัคซีน";
            this.After = "ควรให้ยาลดไข้ เเละเช็ดตัวด้วยน้ำอุ่น ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "ราคาเข็มละ 1,000-1,500 บาท";
            this.Cost2 = "ราคาเข็มละ 350-700 บาท";
          }
        },
        error => {
        });
  }


}
