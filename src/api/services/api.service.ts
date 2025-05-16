import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {catchError, Observable, throwError} from 'rxjs';
import {AboutMe, Education, Job, Language, Reference, Skill} from '../dtos/dtos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4001';

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

  getAboutMe(): Observable<AboutMe> {
    return this.http.get<AboutMe>(`${this.apiUrl}/aboutMe`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/educations`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  createEducation(education: Education): Observable<Education[]>  {
    return this.http.post<Education[]>(`${this.apiUrl}/createEducation`, education).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getReference(): Observable<Reference[]> {
    return this.http.get<Reference[]>(`${this.apiUrl}/references`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/skills`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.apiUrl}/languages`).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  getHobbies(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/hobbies`).pipe(
      catchError(this.handleError.bind(this))
    );
  }
}
