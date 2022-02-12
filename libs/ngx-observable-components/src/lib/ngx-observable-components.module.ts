import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ObservableComponent } from './observable.component'
import { HasPropsComponent } from './has-props.component'
import { HasActionsComponent } from './has-actions.component'
import { HasPropsAndActionsComponent } from './has-props-and-actions.component'

const components = [
  ObservableComponent,
  HasPropsComponent,
  HasActionsComponent,
  HasPropsAndActionsComponent,
]
@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components],
})
export class NgxObservableComponentsModule {}
