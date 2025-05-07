import { Component } from '@angular/core';
import {CandidateSummary} from '../candidate-summary-component/candidate-summary-component';
import {AboutMeComponent} from '../about-me-component/about-me-component';
import {EducationComponent} from '../education-component/education-component';
import {JobExperienceComponent} from '../job-experience-component/job-experience-component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'cv-component',
  styleUrls: ["./cv-component.scss"],
  imports: [
    CandidateSummary,
    AboutMeComponent,
    EducationComponent,
    JobExperienceComponent,
    NgOptimizedImage
  ],
  templateUrl: './cv-component.component.html'
})
export class CvComponent {}
