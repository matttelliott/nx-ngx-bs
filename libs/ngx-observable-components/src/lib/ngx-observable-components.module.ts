import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ObservableComponent } from './observable.component'
import { HasPropsComponent } from './has-props.component'
import { HasActionsComponent } from './has-actions.component'
import { HasPropsAndActionsComponent } from './has-props-and-actions.component'
import { HasLifecycleComponent } from './has-lifecycle.component'

const components = [
  ObservableComponent,
  HasPropsComponent,
  HasActionsComponent,
  HasPropsAndActionsComponent,
  HasLifecycleComponent,
]
@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components],
})
export class NgxObservableComponentsModule {}
