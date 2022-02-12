import { Component } from '@angular/core'
import { ObservableComponent } from '@matttelliott/ngx-observable-components'

@Component({
  selector: 'nx-ngx-bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ObservableComponent {
  title = 'ngx-bs'
  onInit = this.ngOnInit$.subscribe(() => console.log('ngOnInit$'))
  onDoCheck = this.ngOnDoCheck$.subscribe(() => console.log('ngOnDoCheck$'))
  afterViewInit = this.ngAfterViewInit$.subscribe(() =>
    console.log('ngAfterViewInit$')
  )
  afterViewChecked = this.NgAfterViewChecked$.subscribe(() =>
    console.log('ngAfterViewChecked$')
  )
  afterContentInit = this.ngAfterContentInit$.subscribe(() =>
    console.log('ngAfterContentInit$')
  )
  afterContentChecked = this.NgAfterContentChecked$.subscribe(() =>
    console.log('NgAfterContentChecked$')
  )
  onDestroy = this.ngOnDestroy$.subscribe(() => console.log('ngOnDestroy$'))
}
