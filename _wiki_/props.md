[index](./index.md)

# `@Input()` as `props`

Even simple Angular components can begin to accumulate `@Input()`s pretty
quickly. say we have some kind of form for a user

```typescript
class UserFormComponent implements OnInit, OnChanges {
  @Input()
  user: User

  @Input()
  isDarkMode: boolean

  @Input()
  size: number

  @Input()
  loggingInfo: object

  @Input()
  companyStuff: unknown

  form: UserForm

  ngOnInit() {
    this.form = new FormGroup(this.user)
  }
}
```

This can become difficult to manage and cause parent component templates to
swell up with input declarations

```typescript
@Component({
  template: `
    <user-form-component
      [user]="user"
      [isDarkMode]="isUserFormDarkMode"
      [size]="userFormSize"
      [loggingInfo]="userLog"
      [companyStuff]="userFormCompanyStuff"
    >
    </user-form-component>
    <other-component
      [thing]="thing"
      [isDarkMode]="isOtherComponentDarkMode"
      [size]="otherComponentSize"
      [loggingInfo]="otherComponentLoggingInfo"
    >
    </other-component>
  `,
})
class ParentComponent {
  public user = user
  public isUserFormDarkMode = true
  public userFormSize = 3
  public userLog = { isVip: false }
  public userFormCompanyStuff = undefined
  public thing = {foo: 'bar'}
  public isOtherComponentDarkMode = true
  public otherComponentSize = 10
  public otherComponentLoggingInfo = { isImportant: true }
}
```

It begins to make sense to combine these inputs into an object and provide a
single `Input()` instead. Lets call this input `props` and define an
appropriate interface for our component and export it so consumers know exactly
what we want

```typescript
class UserFormComponent implements OnInit {
  @Input()
  props: UserFormComponentProps

  form: UserForm

  ngOnInit() {
    this.form = new UserForm(this.props.user)
  }
}

interface UserFormComponentProps {
  user: User
  isDarkMode: boolean
  size: number
  loggingInfo: object
  companyStuff: unknown
}
```

This removes extra code from our ParentComponent, as well as allowing us to group inputs by consumers and provide type definitions for these objects

```typescript
@Component({
  template: `
    <user-form-component [props]="userFormProps"> </user-form-component>
    <other-component [props]="otherComponentProps"> </other-component>
  `,
})
class ParentComponent {
  public userFormProps: UserFormComponentProps = {
    user: user,
    isDarkMode: true,
    size: 3,
    loggingInfo: { isVip: false },
    companyStuff: undefined,
  }

  public otherComponentProps: OtherComponentProps = {
    isDarkMode: true,
    size: 10,
    loggingInfo: { isImportant: true },
  }
}
```

next:: [props-as-observables](./props-as-observables.md)
