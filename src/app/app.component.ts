import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'base-angular';
}
