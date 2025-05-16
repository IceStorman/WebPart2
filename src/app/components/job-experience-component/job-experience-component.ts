import { Component } from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';

class Job{
  constructor(
    public job: string,
    public city: string,
    public years: string,
    public title: string,
    public description: string,
    ) {}
}

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

  jobs = [
    new Job(
      "Creative Agency",
      "Chicago",
      "2020-Present",
      "SENIOR WEB DESIGNER",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ),
    new Job(
      "Creative Market",
      "United Kingdom",
      "2015-2020",
      "SENIOR WEB DESIGNER",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ),
    new Job(
      "Marketing Agency",
      "United Kingdom",
      "2013-2015",
      "MARKETING MANAGER",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    ),
  ]
}
