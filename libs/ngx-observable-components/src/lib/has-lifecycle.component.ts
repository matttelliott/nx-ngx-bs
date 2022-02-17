import { Component } from '@angular/core'
import { ReplaySubject } from 'rxjs'
import {
  NgAfterViewChecked$,
  NgOnInit$,
  NgOnDoCheck$,
  NgOnDestroy$,
  NgAfterViewInit$,
  NgAfterContentChecked$,
  NgAfterContentInit$,
} from './lifecycle-decorators'

/*
 * add lifecycle events to a component as Observable properties
 *
 * @example
 * ```typescript
 * @Component({})
 * class MyComponent extends HasLifecycleComponent {
 *   test$ = this.ngOnInit$.subscribe(() => console.log('ngOnInit'))
 * }
 * ```
 */
@Component({ template: '' })
export class HasLifecycleComponent {
  @NgOnInit$()
  protected readonly ngOnInit$!: ReplaySubject<void>

  @NgOnDoCheck$()
  protected readonly ngOnDoCheck$!: ReplaySubject<void>

  @NgOnDestroy$()
  protected readonly ngOnDestroy$!: ReplaySubject<void>

  @NgAfterViewInit$()
  protected readonly ngAfterViewInit$!: ReplaySubject<void>

  @NgAfterViewChecked$()
  protected readonly NgAfterViewChecked$!: ReplaySubject<void>

  @NgAfterContentInit$()
  protected readonly ngAfterContentInit$!: ReplaySubject<void>

  @NgAfterContentChecked$()
  protected readonly NgAfterContentChecked$!: ReplaySubject<void>
}
