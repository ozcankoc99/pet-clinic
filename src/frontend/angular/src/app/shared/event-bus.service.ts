import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmitEvent } from './emit-event';
import { Events } from './events';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EmitEvent>();

  on(event: Events, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }

  emitEvent(event: EmitEvent) {
    this.subject$.next(event);
  }

  emit(name: Events, value?: any) {
    this.emitEvent(new EmitEvent(name, value));
  }
}
