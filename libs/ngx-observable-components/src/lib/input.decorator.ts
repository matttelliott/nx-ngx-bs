import { ReplaySubject } from 'rxjs'

/*
 *
 *  Class method decorator to convert an angular `@Input()` property to an
 *  observable stream that completes on ngOnDestroy. Parent components pass down
 *  inputs just like normal (eg `<my-component [props]="propsFromParent"></my-component>`
 *  or `<my-component [props]="propsStreamFromParent$ |
 *  async"></my-component>`). note that the both the input and observable
 *  properties must be declared on the component
 *  with similar names `props` and `props$`. The `@Input()` decorator from
*  `@angular/core` is required in addition to this one
 *
 * @example
 *
 * ```typescript
 *  class MyComponent {
 *    @Input()
 *    @Input$()
 *    public props!: MyComponentProps
 *    private readonly prop$!: Observable<MyComponentProps>
 *
 *    private foo$ = this.prop$.pipe(map(props => props.foo))
 *  }
 *  ```
 *
 */
export function Input$() {
  return (target: any, propName: string): void => {
    const prop$ = new ReplaySubject<unknown>(1)
    const propName$ = propName + '$'

    Object.defineProperty(target, propName, {
      set: (value) => {
        prop$.next(value)
      },
    })
    const oldOnDestroyFn = target?.ngOnDestroy || function () { return void 0 }
    const newOnDestroyFn = () => {
      prop$.complete()
      oldOnDestroyFn && oldOnDestroyFn()
    }
    Object.assign(target, { [propName$]: prop$, ngOnDestroy: newOnDestroyFn })
  }
}
