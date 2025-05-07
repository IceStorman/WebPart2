import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponent } from './components/base_component/cv-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab';
}
