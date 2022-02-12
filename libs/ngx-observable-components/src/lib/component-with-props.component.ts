import { Component, Input, Output } from '@angular/core'
import { Input$ } from '../input.decorator'
import { Observable, ReplaySubject } from 'rxjs'
import { CompleteOnDestroy$, NgOnDestroy$, NgOnInit$ } from '..'

/*
 *
 *
 *
 * add a property `protected readonly props$: ReplaySubject<T>` to a
 * component and expose `@Input() public props: T` to parent components
 *
 * @example
 * ```typescript
 * interface MyComponentProps {
 *   myProperty: string
 * }
 *
 * @Component({})
 * class MyComponent extends ComponentWithProps<MyComponentProps> {
 *   myProperty$ = this.props$(map(props => props.myProperty))
 * }
 *
 * @Component({
 *   template: `<my-component [props]="childProps></my-component>`
 * })
 * class MyParent {
 *   childProps = {myProperty: 'foo'}
 * }
 * ```
 */
@Component({ template: '' })
export class HasPropsComponent<T> {
  @Input()
  @Input$()
  public props!: T
  protected readonly props$!: Observable<T>
}


@Component({ template: '' })
export class HasActionsComponent<T> {
  @Output()
  @CompleteOnDestroy$()
  public readonly action$ = new ReplaySubject<T>(1)
}
