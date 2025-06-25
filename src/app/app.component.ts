import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppToolbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Shop';
}
