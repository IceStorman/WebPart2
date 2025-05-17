import {Component, OnInit} from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Job, Reference} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';

@Component({
  selector: "job-experience-component",
  templateUrl: "./job-experience-component.html",
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf
  ],
  styleUrls: ["./job-experience-component.scss"]
})
export class JobExperienceComponent implements OnInit {
  faBusinessTime = faBusinessTime;
  isModalOpen = false;

  jobs: Job[] = []

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const job = (form.elements.namedItem('job') as HTMLInputElement)?.value;
    const city = (form.elements.namedItem('city') as HTMLInputElement)?.value;
    const years = (form.elements.namedItem('years') as HTMLInputElement)?.value;
    const position = (form.elements.namedItem('position') as HTMLInputElement)?.value;
    const description = (form.elements.namedItem('description') as HTMLInputElement)?.value;

    const newJob: Job = {job: job, city: city, years: years, title: position, description: description};

    this.ApiService.createJob(newJob).pipe(
      switchMap(() => this.ApiService.getJobs())
    ).subscribe({
      next: (response) => {
        this.ApiService.getJobs().subscribe((data: Job[]) => {
          this.jobs = data;
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
