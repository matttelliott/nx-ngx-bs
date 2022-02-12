import { Component, Output } from "@angular/core"
import { ReplaySubject } from "rxjs"
import { CompleteOnDestroy$ } from "./lifecycle-decorators"
import { HasPropsComponent } from "./has-props.component"

@Component({ template: '' })
export class HasPropsAndActionsComponent<P,A> extends HasPropsComponent<P> {
  @Output()
  @CompleteOnDestroy$()
  public readonly action$ = new ReplaySubject<A>(1)
}

