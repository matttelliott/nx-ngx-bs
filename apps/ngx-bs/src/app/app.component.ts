import { Component } from '@angular/core'
import { NgOnDoCheck$, NgOnInit$ } from '@matttelliott/ngx-observable-components'
import { ReplaySubject } from 'rxjs'

@Component({
  selector: 'nx-ngx-bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-bs'

  @NgOnInit$()
  private readonly ngOnInit$!: ReplaySubject<void>
  onInit = this.ngOnInit$.subscribe(() => console.log('ngOnInit$'))

  @NgOnDoCheck$()
  private readonly ngOnDoCheck$!: ReplaySubject<void>
  onDoCheck = this.ngOnDoCheck$.subscribe(() => console.log('ngOnDoCheck$'))
}
