import { Component } from "@angular/core"
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: "job-experience-component",
  templateUrl: "./job-experience-component.html",
  imports: [
    FaIconComponent
  ],
  styleUrls: ["./job-experience-component.scss"]
})
export class JobExperienceComponent {
  faBusinessTime = faBusinessTime;
}
