import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  endpoint = 'http://localhost:3789/People';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  mensaje = 'Ejecuntando el guardar person';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || [ ] || { };
  }

  getPerson(): Observable<any>{
    return this.http.get(this.endpoint + 'persons').pipe(
      map(this.extractData)
    );
  }

  setPerson(save_person){
    let params = JSON.stringify(save_person);
    return this.http.post(this.endpoint + '/Add-Person', params, this.httpOptions).pipe(
      map(this.extractData)
    );
  }

}
