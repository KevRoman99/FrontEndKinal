import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
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

  getCourse(): Observable<any>{
    return this.http.get(this.endpoint + '/List-Course').pipe(
      map(this.extractData)
    );
  }

  setCourse(save_course): Observable<any>{
    let params = JSON.stringify(save_course);
    return this.http.post(this.endpoint + '/Save-Course', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
