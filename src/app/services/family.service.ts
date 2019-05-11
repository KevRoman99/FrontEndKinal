import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  endpoint = 'http://localhost:3789/Family';
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

  getPerson(get_person): Observable<any>{
    let params = JSON.stringify(get_person);
    return this.http.get(this.endpoint + '/searchPerson').pipe(
      map(this.extractData)
    );
  }

  setFamily(save_family){
    let params = JSON.stringify(save_family);
    return this.http.post(this.endpoint + '/Add-family', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }
}
