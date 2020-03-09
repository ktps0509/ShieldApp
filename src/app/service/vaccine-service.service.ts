import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProfileUser } from '../Model/profile-user';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';


export interface Vac {
  vacId?: string,
  dataVac: Array<VacDetail>
}

export interface VacDetail {
  tips: string,
  age: string,
  protect: string,
  no: number,
  amount: string,
  type: string,
  price: string,
  detail: string,
  effect: string,
  name: string,
  care: string,
  times: Array<VacTimes>
}

export interface VacTimes {
  period: number,
  time : string
}

@Injectable({
  providedIn: 'root'
})
export class VaccineServiceService {

  // private Vaccine: Observable<Vac[]>;
  // private VaccineCollection: AngularFirestoreCollection<Vac>;

  constructor(private http: HttpClient,
    private afStorage : AngularFireStorage,
    private storage: Storage,
    private alertCtr: AlertController) { 
  }

  
  getVacs(): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/vaclist`)
      .pipe(
      );
  }

  getVacLisyByType(type: string): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/getvacbytype/${type}`)
      .pipe(
      );
  }

  getVacLisyByType2(type: string): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/getvacbytype2/${type}`)
      .pipe(
      );
  }

  getVacByCode(code: string): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/getvacbycode/${code}`)
  }

  LoginAPI(User): Observable<any> {
    return this.http.post<any>(`${environment.Endpiont_API}/userlogin`, User)
  }

  Register(UserProfile): Observable<any> {
    return this.http.post<any>(`${environment.Endpiont_API}/adduser`, UserProfile)
  }

  AddVaccine(Vac): Observable<any> {
    return this.http.post<any>(`${environment.Endpiont_API}/addVacByUser`, Vac)
  }

  GetHistoryVaccine(uid : string): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/gethistorybyid/${uid}`)
  }

  GetHistoryByDate(UserDate): Observable<any> {
    return this.http.post<any>(`${environment.Endpiont_API}/gethisByDate`, UserDate)
  }


  getVacImg(name: string) : any {
    let test = this.afStorage.storage.ref(name)

    let imgsrc = test.getDownloadURL()
    console.log(imgsrc,"asdsadasdasdasd");
    return imgsrc
  }

  getVacForSave(): Observable<any> {
    return this.http.get<any>(`${environment.Endpiont_API}/getvacforsave`)
  }

  GetCurrentUser():Promise<ProfileUser>{
    return new Promise((resolve) => {
  
      this.storage.get('User').then(data => {
        var CurrentUser :ProfileUser;
         CurrentUser = Object.assign({}, CurrentUser, data);
        CurrentUser.name = data.name;
        CurrentUser.surname = data.surname;
        CurrentUser.birth_date = data.birth_date;
        CurrentUser.age = data.age;
        CurrentUser.blood_type = data.blood_type;
        CurrentUser.drug_al = CurrentUser.drug_al;
        CurrentUser.sick = CurrentUser.sick;
        CurrentUser.weight = CurrentUser.weight;
        CurrentUser.height = CurrentUser.height;
        return resolve(CurrentUser);
   });
   
   });
  }


  async openSuccess(msg: string) {
    const alert = await this.alertCtr.create({
      header: 'Success!',
      message: '' + msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }


}
