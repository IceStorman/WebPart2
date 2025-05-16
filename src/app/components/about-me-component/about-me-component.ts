import {Component, OnInit} from "@angular/core";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {AboutMe} from '../../../api/dtos/dtos';
import {ApiService} from '../../../api/services/api.service';

@Component({
  selector: "about-me-component",
  templateUrl: "./about-me-component.html",
  styleUrls: ["./about-me-component.scss"],
  imports: [
    FontAwesomeModule,
  ]
})
export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe = { firstPart: '', highlightedPart: '', lastPart: '' };

  constructor(library: FaIconLibrary, private ApiService: ApiService) {
    library.addIcons(faUser);
  }

  ngOnInit() {
    this.ApiService.getAboutMe().subscribe((data: AboutMe) => {
      this.aboutMe = data;
    });
  }
}
