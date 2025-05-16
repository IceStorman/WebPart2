import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';

class Reference {
  name: string;
  description: string;
  phoneNumber: string;
  email: string;

  constructor(newName: string, newDescription: string, newPhoneNumber: string, newEmail: string ) {
    this.name = newName;
    this.description = newDescription;
    this.phoneNumber = newPhoneNumber;
    this.email = newEmail;
  }
}

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

  references = [
    new Reference("DARWIN B. MAGANA", "2813 Shobe Lane Mancos, CO.", "+1-970-533-3393", "www.yourwebsite.com"),
    new Reference("ROBERT J. BELVIN", "2119 Fairfax Drive Newark, NJ.", "+1-908-987-5103", "www.yourwebsite.com"),
  ]
}
