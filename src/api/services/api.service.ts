import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:1488';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.message}`;
    } else {
      errorMessage = `Server error: ${error.message}`;
    }

    this.toastr.error(errorMessage, 'API Error', {
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-bottom-right',
      tapToDismiss: false
    });

    return throwError(() => new Error(errorMessage));
  }

}
