import { Component } from '@angular/core'
import { ReplaySubject } from 'rxjs'
import {
  NgAfterContentChecked$,
  NgAfterContentInit$,
  NgAfterViewChecked$,
  NgAfterViewInit$,
  NgOnDoCheck$,
  NgOnDestroy$,
  NgOnInit$,
} from './lifecycle-decorators'
import { HasPropsAndActionsComponent } from './has-props-and-actions.component'

/*
 * Extendable component that exposes angular component lifecyle methods, input
 * props, and output actions as obsvable streams
* @example usage
```
class MyComponent extends ObservableComponent<MyComponentProps, MyComponentAction> {
}
```
 */
@Component({ template: '' })
export class ObservableComponent<P = never, A = never> extends HasPropsAndActionsComponent<
  P,
  A
> {
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
