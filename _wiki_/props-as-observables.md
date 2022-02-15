[index](./index.md)

previous:: [props](./props.md)

# `props$` as observables

Reacting to changes in Angular can be cumbersome even in the simplest cases.
Say we have some values that we don't want to update of the input is null

```typescript
@Component({
  template: '{{foo}} - {{bar}}',
})
export class MyComponent implements OnChanges {
  @Input() props: MyComponentProps

  foo: Foo
  bar: Bar

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props'] && changes['props'].currentValue) {
      this.updateFoo(changes['props'].currentValue.foo)
      this.updateBar(changes['props'].currentValue.bar)
    }
  }

  updateFoo(foo) {
    if (foo) {
      this.foo = foo
    }
  }
  updateBar(bar) {
    if (bar) {
      this.bar = bar
    }
  }
}
```

Angular encourages us to use RxJs. Let's treat our input as an observable
stream and react accordingly. We can create a `ReplaySubject` from our props
and use the TypeScript `set` operator to turn our input into a stream. Note
that in TypeScript the use of `set` does not mandate the use of `get`. In this
case, instead of using an intermediary value `_props` and reading from a method
`get props`, we are piping values from `set` into readable stream `props$`

```typescript
@Component({
  template: '{{foo}} - {{bar}}',
})
class MyComponent {
  private readonly props$ = new ReplaySubject<MyComponentProps>(1)
  @Input()
  set props(props: MyComponentProps) {
    this.props$.next(props)
  }
}
```

Now we can treat our component properies as streams as well. This lets us use
RxJs operators to handle the stream as needed before being sent to the
template. Note the addition of the `async` pipe to the template. Because we are
piping the observables directly into the template, there is no need to
subscribe to observables and manually set values on the component, and there is
no need to clean up these subscriptions as they are handled by the `async` pipe

```typescript
@Component({
  template: '{{foo | async }} - {{bar | async}}',
})
class MyComponent {
  private readonly props$ = new ReplaySubject<MyComponentProps>(1)
  @Input()
  set props(props: MyComponentProps) {
    this.props$.next(props)
  }

  public foo$ = this.props$.pipe(
    map((props) => props.foo),
    filter((foo) => !!foo)
  )

  public bar$ = this.props$.pipe(
    map((props) => props.bar),
    filter((foo) => !!bar)
  )
}
```

As with all components, we must use care not to unnecessarily update props and
negate the performance benefits of `OnPush` change detection. This can often be
done using the `distinctUntilChanged` rxjs operator

```typescript
@Component({
  template: `
    <user-form-component [props]="userFormProps"> </user-form-component>
    <other-component [props]="otherComponentProps"> </other-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class ParentComponent {
  public userFormProps$: UserFormComponentProps = this.props$.pipe(
    map((props) => props.user),
    distinctUntilChanged((a, b) => a.id === b.id),
    map((user) => ({
      user: user,
      isDarkMode: true,
      size: 3,
      loggingInfo: { isVip: false },
      companyStuff: undefined,
    }))
  )
}
```

next:: [input-props-decorator](./input-props-decorator.md)
