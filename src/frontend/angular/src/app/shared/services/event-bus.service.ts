import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmitEvent } from '../model/emit-event';
import { EventTypes } from '../model/event-types';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private subject$ = new Subject<EmitEvent>();

  on(event: EventTypes, action: any): Subscription {
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

  emit(name: EventTypes, value?: any) {
    this.emitEvent(new EmitEvent(name, value));
  }
}
