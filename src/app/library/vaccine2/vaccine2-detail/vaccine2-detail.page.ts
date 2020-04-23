import { Component, OnInit } from '@angular/core';
import { VaccineServiceService } from 'src/app/service/vaccine-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-vaccine2-detail',
  templateUrl: './vaccine2-detail.page.html',
  styleUrls: ['./vaccine2-detail.page.scss'],
})
export class Vaccine2DetailPage implements OnInit {

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

          if (this.VacDetail.vaccode == "B001") {
            this.Descript = "โรคคอตีบ : เกิดจากเชื้อแบคทีเรียที่อยู่ภายในเยื่อบุคอ สามารถติดเชื้อผ่านทางน้ำลาย เสมหะ น้ำมูก การหายใจ ไอ หรือ จาม โดยจะมีอาการคออักเสบอย่างรุนแรง อาจทำให้เสียชีวิตจากทางเดินหายใจอุดกั้นได้ หรือจากพิษของเชื้อทำให้กล้ามเนื้อหัวใจอักเสบ หรือปลายประสาทอักเสบได้";
            this.Descript2 = "โรคไอกรน : เกิดจากเชื้อเเบคทีเรียที่อยู่ในลำคอ สามารถติดเชื้อผ่านทางละอองที่เกิดจากการไอ หรือจาม โดยจะมีอาการไอรุนแรง หายใจเข้ามีเสียงดัง หรือการอาเจียนจากการไอ ตัวเขียว จนหยุดหายใจได้";
            this.Descript3 = "โรคบาดทะยัก : เกิดจากเชื้อเเบคทีเรียที่อยู่ในดิน ฝุ่นละออง ผิวหนัง และอุจจาระของคน สามารถติดเชื้อผ่านทางบาดแผลโดยเฉพาะบาดแผลที่ลึกเข้าไปในผิวหนัง โดยจะมีอาการกล้ามเนื้อทำงานผิดปกติ ขากรรไกรแข็ง อ้าปากไม่ค่อยได้ เกร็ง ชักกระตุก หรือหยุดหายใจได้";
            this.Effect = "อาจมีไข้ ปวด บวม แดงบริเวณที่ฉีด";
            this.After = "ควรให้ยาลดไข้ เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 1,000-1,500 บาท";
            this.Cost2 = "เข็มละ 350-700 บาท"
          }
          else if (this.VacDetail.vaccode == "B002") {
            this.Descript = "โรคโปลิโอเกิดจากเชื้อไวรัสที่มีทั้งหมด 3 สายพันธุ์ ซึ่งพบอยู่ในบริเวณลำไส้และถูกขับถ่ายออกมากับอุจจาระ มักเกิดโรคในเด็กเล็กที่อายุต่ำกว่า 5 ปี เพราะยังไม่มีภูมิต้านทานโรค สามารถติดต่อผ่านทางอาหารหรือน้ำที่ปนเปื้อนเชื้อ ทำให้เกิดอาการอัมพาตที่ขาแบบเฉียบพลัน ปวดกล้ามเนื้อ กล้ามเนื้อลีบ และอาจเกิดอาการอัมพาตของระบบหายใจ จนเสียชีวิตได้";
            this.Effect = "อาจมีไข้ และอาการปวดบวมแดงบริเวณที่ฉีด";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบ";
            this.Cost1 = " เข็มละ 600-1,500 บาท";
            this.Cost2 = "เข็มละ 300-500 บาท";
          }
          else if (this.VacDetail.vaccode == "B003") {
            this.Descript = "โรคมะเร็งปากมดลูกเกิดจากเชื้อไวรัส สามารถติดเชื้อได้จากการมีเพศสัมพันธ์ตั้งแต่อายยุยังน้อย โดยจะมีก้อนเนื้อเกิดขึ้นบริเวณมดลูก ช่องคลอด หรือช่องปากมดลูก โดยจะมีอาการตกขาวมีเลือดหรือหนองปน ช่องคลอดมีกลิ่นผิดปกติ เบื่ออาหาร น้ำหนักลด ปัสสาวะมีเลือดปน และอาจเสียชีวิตได้";
            this.Effect = "อาจมีอาการไข้ ปวด บวม ผื่นแดง และคันบริเวณที่ฉีด";
            this.After = "ควรให้ยาลดไข้เเละเช็ดตัวด้วยน้ำอุณหภูมิห้อง ส่วนบริเวณที่บวมให้ใช้วิธีประคบเย็น";
            this.Cost1 = "เข็มละ 1,500-2,000 บาท";
            this.Cost2 = "เข็มละ 3,000-5,000 บาท";
          }
        },
        error => {
        });


  }


}
