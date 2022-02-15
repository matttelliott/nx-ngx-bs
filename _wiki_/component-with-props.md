[index](./index.md)

previous:: [input-props-decorator](./input-props-decorator.md)

# [`ComponentWithProps<T>`](https://github.com/matttelliott/nx-ngx-bs/blob/master/libs/ngx-observable-components/src/lib/component-with-props.component.ts)

If we want to lean into the power or RxJs as the Angular framework encourages
us to, it is convenient and expedient to adopt the convention of using the
generic property `props` as a single `@Input()` to hold all the values required
for a component and stream these values into an Observable `props$`. We can
create an abstract component so that we can easliy use the `props` convention
in any component as follows

```typescript
@Component({ template: '' }) // @Component decorator is required by angular for @Input decorator
export class ComponentWithProps<T> {
  @Input()
  @Input$()
  public props!: T
  protected readonly props$!: Observable<T>
}
```

The abstract class uses the `@Input$()` decorator. `props$` is marked as
`protected` in typescript so that it is exposed to consuming components but not
directly availble outside the component

```typescript
interface MyComponentProps {
  foo: string
}

class MyComponent extends ComponentWithProps<MyComponentProps> {
  public foo$ = this.props$.pipe(map((props) => props.foo)) // OK!! no more setup needed
}
```

This means that adding a new property to our required inputs means all we have
to do is update an interface

```typescript
interface MyComponentProps {
  foo: string
  bar: string
}

class MyComponent extends ComponentWithProps<MyComponentProps> {
  public foo$ = this.props$.pipe(map((props) => props.foo))
  public bar$ = this.props$.pipe(map((props) => props.bar))
}
```

Because the abstract class requires a type for the input `props`, we get LSP
support in angular templates

```html
<my-component [props]="{foo: 10}"></my-component>
<!-- Error: Type '{ foo: number; } | null' is not assignable to type 'MyComponentProps'.  Type '{ foo: number; }' is not assignable to type '{foo: string; }' -->
```
