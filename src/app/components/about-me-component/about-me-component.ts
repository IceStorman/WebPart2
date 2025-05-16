import { Component } from "@angular/core";
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class AboutMe{
  constructor(
    public firstPart: string,
    public highlightedPart: string,
    public lastPart: string,
  ){}
}

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

  aboutMe = new AboutMe(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
  );
}
