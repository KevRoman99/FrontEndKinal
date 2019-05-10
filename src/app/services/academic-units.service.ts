import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AcademicUnitsService {
  endpoint = 'http://localhost:3789/EducativeAdministracion';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  getUnits(): Observable<any>{
    return this.http.get(this.endpoint + 'acadecunits').pipe(
      map(this.extractData)
    );
  }

  setunits(save_units): Observable<any>{
    let params = JSON.stringify(save_units);
    return this.http.post(this.endpoint + '/Save-Units-Academic', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
