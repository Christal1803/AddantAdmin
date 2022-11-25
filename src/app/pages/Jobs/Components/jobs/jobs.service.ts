import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private _urlToRequest: string = environment.apiUrl;
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    http: any;

  constructor(private _http: HttpClient) { }


  getJob(): Observable<Boolean> {
    try {
      return this._http.get(`${this._urlToRequest}/api/Position?isAdminCall={true}`, this._httpOptions).pipe(
        tap((response: any) => {
          if (response.success) {
            console.log("Valid response received from server");
            of(true);
          } else {
            of(false);
          }

        }),
        catchError(this.handleError<Boolean>())
      );
    } catch (exception) {
      return of(false);
    }
  }


  private handleError<T>() {
    return (error: any): Observable<boolean> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(false);
    };
  }

 


}

