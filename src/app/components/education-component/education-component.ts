import {Component, OnInit} from '@angular/core'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgForOf, NgIf} from '@angular/common';
import {Education} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';
import {switchMap} from 'rxjs';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: "education-component",
  templateUrl: "./education-component.html",
  styleUrls: ["./education-component.scss"],
  imports: [
    FontAwesomeModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ]
})
export class EducationComponent implements OnInit {
  faGraduationCap = faGraduationCap;

  isModalOpen = false;
  form: FormGroup;

  educations: Education[] = [];

  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.form = this.fb.group({
      university: ['', Validators.required],
      years: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.ApiService.getEducation().subscribe((data: Education[]) => {
      this.educations = data;
    })
  }

  handleSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const newEducation: Education = {
      school: this.form.value.university,
      years: this.form.value.years,
      title: this.form.value.title,
      description: this.form.value.description
    };

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
