import { Component } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'references-component',
  templateUrl: 'references-component.html',
  imports: [
    FaIconComponent
  ],
  styleUrls: ['references-component.scss']
})
export class ReferencesComponentComponent {
  faUsers = faUsers;
}
