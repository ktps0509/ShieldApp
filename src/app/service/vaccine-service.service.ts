import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


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

  constructor(private http: HttpClient) { 
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
    console.log(code, "WEEEEEEEE")
    return this.http.get<any>(`${environment.Endpiont_API}/getvacbycode/${code}`)
      .pipe(
      );
  }

}