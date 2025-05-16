import { Component } from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Job} from '../../../api/dtos/dtos';

@Component({
  selector: "job-experience-component",
  templateUrl: "./job-experience-component.html",
  imports: [
    FaIconComponent,
    NgForOf
  ],
  styleUrls: ["./job-experience-component.scss"]
})
export class JobExperienceComponent {
  faBusinessTime = faBusinessTime;

  jobs: Job[] = [
    {
      job: "Creative Agency",
      city: "Chicago",
      years: "2020-Present",
      title: "SENIOR WEB DESIGNER",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      job: "Creative Market",
      city: "United Kingdom",
      years: "2015-2020",
      title: "SENIOR WEB DESIGNER",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      job: "Marketing Agency",
      city: "United Kingdom",
      years: "2013-2015",
      title: "MARKETING MANAGER",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
  ]
}
