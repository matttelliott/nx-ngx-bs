import { of } from 'rxjs';

export * from './lib/ngx-observable-components.module';
export * from './lib/lifecycle-decorators';

export function test$() {
  console.log('test$')
  return of('test$')
}
