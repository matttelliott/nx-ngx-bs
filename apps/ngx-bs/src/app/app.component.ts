import { Component } from '@angular/core';
import { test$ } from '@matttelliott/ngx-observable-components';

@Component({
  selector: 'nx-ngx-bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-bs';
  test$ = test$()
}
