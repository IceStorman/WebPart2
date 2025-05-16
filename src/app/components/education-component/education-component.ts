import {Component, OnInit} from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Education} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule,
    NgForOf,
    NgIf
  ]
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  isModalOpen = false;

  educations: Education[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getEducation().subscribe((data: Education[]) => {
      this.educations = data;
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const university = (form.elements.namedItem('university') as HTMLInputElement)?.value;
    const years = (form.elements.namedItem('years') as HTMLInputElement)?.value;
    const title = (form.elements.namedItem('title') as HTMLInputElement)?.value;
    const description = (form.elements.namedItem('description') as HTMLInputElement)?.value;

    const newEducation: Education = {school: university, years: years, title: title, description: description};

    this.ApiService.createEducation(newEducation).pipe(
      switchMap(() => this.ApiService.getEducation())
    ).subscribe({
      next: (response) => {
        this.ApiService.getEducation().subscribe((data: Education[]) => {
          this.educations = data;
        })
      },
      error: (err) => {
        console.error('Update failed', err);
      }
    });

    this.closeModal();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
