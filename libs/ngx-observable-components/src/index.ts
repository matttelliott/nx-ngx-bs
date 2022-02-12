import { of } from 'rxjs';

export * from './lib/ngx-observable-components.module';

export function test$() {
  console.log('test$')
  return of('test$')
}
