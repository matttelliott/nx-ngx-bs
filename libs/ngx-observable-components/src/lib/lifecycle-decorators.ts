import { ReplaySubject } from 'rxjs'

/**
 *
 * Lifecycle Decorators
 * Convenience decorators for handling angular lifecycle hooks as Observable
 * events instead of component method calls
 *
 **/

/**
 * @example
 * event as observable
```
class MyComponent {
  @NgOnInit$()
  private readonly ngOnInit$!: ReplaySubject<void>
  test$ = this.ngOnInit$.subscribe(() => console.log('component.ngOnInit$'))
}
```
 */
export function NgOnInit$() {
  return (target: any, propName: string): void => {
    const ngOnInit$ = new ReplaySubject<void>(1)

    const oldInitFn =
      target?.ngOnInit ||
      function () {
        return void 0
      }
    const newInitFn = () => {
      ngOnInit$.next()
      ngOnInit$.complete()
      oldInitFn && oldInitFn()
    }
    Object.assign(target, { [propName]: ngOnInit$, ngOnInit: newInitFn })
  }
}

/**
 * @example
 * event as observable
```
class MyComponent {
  @NgOnDoCheck$()
  private readonly ngOnDoCheck$!: ReplaySubject<void>
  test$ = this.ngOnDoCheck$.subscribe(() => console.log('component.ngOnDoCheck$'))
}
```
*/
export function NgOnDoCheck$() {
  return (target: object, propName: string): void => {
    const ngOnDoCheck$ = new ReplaySubject<void>(1)
    const oldOnDoCheckFn = (target as { ngOnDoCheck: () => void }).ngOnDoCheck
    const newDoCheckFn = () => {
      ngOnDoCheck$.next()
      oldOnDoCheckFn && oldOnDoCheckFn()
    }
    const oldDestroyFn = (target as { ngOnDestroy: () => void }).ngOnDestroy
    const newDestroyFn = () => {
      ngOnDoCheck$.complete()
      oldDestroyFn && oldDestroyFn()
    }
    Object.assign(target, {
      [propName]: ngOnDoCheck$,
      ngOnDoCheck: newDoCheckFn,
      ngOnDestroy: newDestroyFn,
    })
  }
}


/**
 * @example
 * event as observable
```
class MyComponent {
  @NgAfterViewInit()
  private readonly ngAfterViewInit$!: ReplaySubject<void>
  test$ = this.ngAfterViewInit$.subscribe(() => console.log('component.ngAfterViewInit$'))
}
```
*/
export function NgAfterContentInit$() {
  return (
    target: { ngAfterContentInit: () => void },
    propName: string
  ): void => {
    const ngAfterContentInit$ = new ReplaySubject<void>(1)

    const oldInitFn = target.ngAfterContentInit
    const newInitFn = () => {
      ngAfterContentInit$.next()
      ngAfterContentInit$.complete()
      oldInitFn && oldInitFn()
    }
    Object.assign(target, {
      [propName]: ngAfterContentInit$,
      ngOnInit: newInitFn,
    })
  }
}


/**
 * @example
 * event as observable
```
class MyComponent {
  @NgAfterContentChecked$()
  private readonly ngAfterContentChecked$!: ReplaySubject<void>
  test$ = this.ngAfterContentChecked$.subscribe(() => console.log('component.ngAfterContentChecked$'))
}
```
*/
export function NgAfterContentChecked$() {
  return (target: object, propName: string): void => {
    const ngAfterContentChecked$ = new ReplaySubject<void>(1)
    const oldAfterContentCheckedFn = (
      target as { ngAfterContentChecked: () => void }
    ).ngAfterContentChecked
    const newDoCheckFn = () => {
      ngAfterContentChecked$.next()
      oldAfterContentCheckedFn && oldAfterContentCheckedFn()
    }
    const oldDestroyFn = (target as { ngOnDestroy: () => void }).ngOnDestroy
    const newDestroyFn = () => {
      ngAfterContentChecked$.complete()
      oldDestroyFn && oldDestroyFn()
    }
    Object.assign(target, {
      [propName]: ngAfterContentChecked$,
      ngAfterContentChecked: newDoCheckFn,
      ngOnDestroy: newDestroyFn,
    })
  }
}


/**
 * @example
 * event as observable
```
class MyComponent {
  @NgAfterViewInit$()
  private readonly ngAfterViewInit$!: ReplaySubject<void>
  test$ = this.ngAfterViewInit$.subscribe(() => console.log('component.ngAfterViewInit$'))
}
```
*/
export function NgAfterViewInit$() {
  return (target: object, propName: string): void => {
    const ngAfterViewInit$ = new ReplaySubject<void>(1)

    const oldInitFn = (target as { ngAfterViewInit: () => void })
      .ngAfterViewInit
    const newInitFn = () => {
      ngAfterViewInit$.next()
      ngAfterViewInit$.complete()
      oldInitFn && oldInitFn()
    }
    Object.assign(target, { [propName]: ngAfterViewInit$, ngOnInit: newInitFn })
  }
}


/**
 * @example
 * event as observable
```
class MyComponent {
  @NgAfterViewChecked$()
  private readonly ngAfterViewChecked$!: ReplaySubject<void>
  test$ = this.ngAfterViewChecked$.subscribe(() => console.log('component.ngAfterViewChecked$'))
}
```
*/
export function NgAfterViewChecked$() {
  return (target: object, propName: string): void => {
    const ngAfterViewChecked$ = new ReplaySubject<void>(1)
    const oldAfterViewCheckedFn = (target as { ngAfterViewChecked: () => void })
      .ngAfterViewChecked
    const newDoCheckFn = () => {
      ngAfterViewChecked$.next()
      oldAfterViewCheckedFn && oldAfterViewCheckedFn()
    }
    const oldDestroyFn = (target as { ngOnDestroy: () => void }).ngOnDestroy
    const newDestroyFn = () => {
      ngAfterViewChecked$.complete()
      oldDestroyFn && oldDestroyFn()
    }
    Object.assign(target, {
      [propName]: ngAfterViewChecked$,
      ngAfterViewChecked: newDoCheckFn,
      ngOnDestroy: newDestroyFn,
    })
  }
}


/**
 * @example
 * event as observable
```
class MyComponent {
  @NgOnDestroy$()
  private readonly ngOnDestroy$!: ReplaySubject<void>
  test$ = this.ngOnDestroy$.subscribe(() => console.log('component.ngOnDestroy$'))
}
```
*/
export function NgOnDestroy$() {
  return (target: { ngOnDestroy: () => void }, propName: string): void => {
    const ngOnDestroy$ = new ReplaySubject<void>(1)

    const oldDestroyFn = target.ngOnDestroy
    const newDestroyFn = () => {
      ngOnDestroy$.next()
      ngOnDestroy$.complete()
      oldDestroyFn && oldDestroyFn()
    }
    Object.assign(target, {
      [propName]: ngOnDestroy$,
      ngOnDestroy: newDestroyFn,
    })
  }
}

/*
 * Tag a subjected created in a component to be completed on destroy
 *  @example
 * ```typescript
 * @CompleteOnDestroy$()
 * myStatefulStream$!: ReplaySubject<void>
 * test = this.myStatefulStream$.subscribe({ complete: () => console.log('ngOnDestroy') })
 * ```
 */

export function CompleteOnDestroy$() {
  return (target: object, propName: string): void => {
    const subject = new ReplaySubject<unknown>(1)
    const oldDestroyFn = (target as { ngOnDestroy: () => void }).ngOnDestroy
    const newDestroyFn = () => {
      subject.complete()
      oldDestroyFn && oldDestroyFn()
    }
    Object.assign(target, { ngOnDestroy: newDestroyFn, [propName]: subject })
  }
}
