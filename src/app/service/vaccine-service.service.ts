import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProfileUser } from '../Model/profile-user';
import { Storage } from '@ionic/storage';


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
    private storage: Storage) { 
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



}
