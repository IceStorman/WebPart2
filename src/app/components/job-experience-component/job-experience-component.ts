import {Component, OnInit} from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Job} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: "job-experience-component",
  templateUrl: "./job-experience-component.html",
  imports: [
    FaIconComponent,
    NgForOf
  ],
  styleUrls: ["./job-experience-component.scss"]
})
export class JobExperienceComponent implements OnInit {
  faBusinessTime = faBusinessTime;

  jobs: Job[] = []

  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getJobs().subscribe((data: Job[]) => {
      this.jobs = data;
    })
  }
}
