import { Component, Output } from '@angular/core'
import { ReplaySubject } from 'rxjs'
import { CompleteOnDestroy$ } from './lifecycle-decorators'

/**

add a property `protected readonly props$: ReplaySubject<T>` to a
component and expose `@Input() public props: T` to parent components

@example ```typescript
interface MyComponentProps {
  myProperty: string
}
 
@Component({})
class MyComponent extends HasActionsComponent<{type: 'click button' } & unknown> {
  onEvent() {
    this.action$.next({type:'click button'})
  }
}
 
@Component({
  template: `<my-component (action$)="action$.next($event)"></my-component>`
})
class MyParent {
  @Output()
  public readonly action$ = new ReplaySubject<ParentComponentAction>(1)
  test = this.action$.subscribe(x => console.log('MyComponent.action$'))
}
type MyParentProps = MyComponentAction & ParentAction & OtherComponentAction & ...
```
**/

@Component({ template: '' })
export class HasActionsComponent<T> {
  @Output()
  @CompleteOnDestroy$()
  public readonly action$ = new ReplaySubject<T>(1)
}
