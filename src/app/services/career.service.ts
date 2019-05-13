import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CareerService {
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

  getCareer(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Career-Educative').pipe(
      map(this.extractData)
    );
  }

  setCareer(save_career): Observable<any>{
    let params = JSON.stringify(save_career);
    return this.http.post(this.endpoint + '/Save-Career-Educative', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
