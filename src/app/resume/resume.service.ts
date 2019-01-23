import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
  export class ResumeService {
    private baseUrl = 'assets/resume/';

    constructor(private http: HttpClient) { }

    getSkillset(): Observable<object> {
      return this.http.get(this.baseUrl + "skillset.json").pipe(
        map(results => results),
        catchError(this.handleError)
      );
    }

    getProfile(): Observable<object> {
        return this.http.get(this.baseUrl + "profile.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      getWorkHistory(): Observable<object> {
        return this.http.get(this.baseUrl + "workhistory.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      getCertificates(): Observable<object> {
        return this.http.get(this.baseUrl + "certificates.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      getConferences(): Observable<object> {
        return this.http.get(this.baseUrl + "conferences.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      getCourses(): Observable<object> {
        return this.http.get(this.baseUrl + "courses.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      getEducation(): Observable<object> {
        return this.http.get(this.baseUrl + "education.json").pipe(
          map(results => results),
          catchError(this.handleError)
        );
      }

      downloadFile(path: string) {
        return this.http
          .get(path, {
           responseType: 'blob'
          })
          .subscribe(res => {
              debugger
               var url = window.URL.createObjectURL(res);
               var a = document.createElement('a');
               document.body.appendChild(a);
               a.setAttribute('style', 'display: none');
               a.href = url;
               a.download = path.split('/').pop();
               a.click();
               window.URL.revokeObjectURL(url);
               a.remove(); // remove the element
            }, error => this.handleError(error));
        }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
  }