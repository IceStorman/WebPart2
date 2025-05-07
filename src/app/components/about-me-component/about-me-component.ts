import { Component } from "@angular/core";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "about-me-component",
  templateUrl: "./about-me-component.html",
  styleUrls: ["./about-me-component.scss"],
  imports: [
    FontAwesomeModule,
  ]
})
export class AboutMeComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser);
  }
}
