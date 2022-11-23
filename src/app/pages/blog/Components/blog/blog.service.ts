import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _urlToRequest: string = environment.apiUrl;
  private _httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private _http: HttpClient) { }


  getBlogDetail(): Observable<Boolean> {
    try {
      return this._http.get(`${this._urlToRequest}/api/Blog/Detail`, this._httpOptions).pipe(
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



  saveBlog(categoryBody: any,): Observable<Boolean> {
    try {
      return this._http.post(`${this._urlToRequest}/api/Blog/compose`, categoryBody, this._httpOptions).pipe(
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


  saveEnquiry(enquiryBody: any,): Observable<Boolean> {
    try {
      return this._http.post(`${this._urlToRequest}/api/Enquiry/Create`, enquiryBody, this._httpOptions).pipe(
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
  //dChallenge(challengeBody: any, id: string): Observable<Boolean> {
  //  try {
  //    if (id) {
  //      return this._http.patch(`${this._urlToRequest}/challenge/${id}`, challengeBody, this._httpOptions).pipe(
  //        tap((response: any) => {
  //          if (response.success) {
  //            console.log("Valid response received from server");
  //            of(true);
  //          } else {
  //            of(false);
  //          }

  //        }),
  //        catchError(this.handleError<Boolean>())
  //      );
  //    }
  //    return this._http.post(`${this._urlToRequest}/challenge`, challengeBody, this._httpOptions).pipe(
  //      tap((response: any) => {
  //        if (response.success) {
  //          console.log("Valid response received from server");
  //          of(true);
  //        } else {
  //          of(false);
  //        }

  //      }),
  //      catchError(this.handleError<Boolean>())
  //    );
  //  } catch (exception) {
  //    return of(false);
  //  }
  //}

}
