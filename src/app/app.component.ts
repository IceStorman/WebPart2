import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './components/base_component/base-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab';
}
