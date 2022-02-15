[index](./index.md)

# [Lifecycle Decorators](https://github.com/matttelliott/nx-ngx-bs/blob/master/libs/ngx-observable-components/src/lib/lifecycle-decorators.ts)

Use Lifecycle Hook Decorators  a a syntactic shorthand for dealing with lifecycle events as observable streams

```typescript
class MyComponent {
  @NgOnInit$()
  private readonly ngOnInit$!: ReplaySubject<void>
  
  test$ = this.ngOnInit$.subscribe(() => console.log('MyComponent.ngOnInit$'))
}

```

Note the use of the null-assertion operator `!`. This signals to typescript
that the value will be created by the decorator.
