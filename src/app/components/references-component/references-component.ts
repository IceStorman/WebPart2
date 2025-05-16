import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';
import {Reference} from '../../../api/dtos/dtos';

@Component({
  selector: 'references-component',
  templateUrl: 'references-component.html',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  styleUrls: ['references-component.scss']
})
export class ReferencesComponentComponent {
  faUsers = faUsers;

  references: Reference[] = [
    {
      name: "DARWIN B. MAGANA",
      description: "2813 Shobe Lane Mancos, CO.",
      phoneNumber: "+1-970-533-3393",
      email: "www.yourwebsite.com"
    },
    {
      name: "ROBERT J. BELVIN",
      description: "2119 Fairfax Drive Newark, NJ.",
      phoneNumber: "+1-908-987-5103",
      email: "www.yourwebsite.com"
    }
  ]
}
