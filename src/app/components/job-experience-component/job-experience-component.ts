import {Component, OnInit} from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Job, Reference} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: "job-experience-component",
  templateUrl: "./job-experience-component.html",
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ["./job-experience-component.scss"]
})
export class JobExperienceComponent implements OnInit {
  faBusinessTime = faBusinessTime;
  isModalOpen = false;
  form: FormGroup;

  jobs: Job[] = []

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.form = this.fb.group({
      job: ['', Validators.required],
      city: ['', Validators.required],
      years: ['', Validators.required],
      position: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.ApiService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }

  handleSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newJob: Job = {
      job: this.form.value.job,
      city: this.form.value.city,
      years: this.form.value.years,
      title: this.form.value.position,
      description: this.form.value.description,
    };

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
    this.form.reset();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.form.reset();
  }
}
