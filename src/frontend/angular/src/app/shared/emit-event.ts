import { EventTypes } from './event-types';

export class EmitEvent {
  constructor(public name: EventTypes, public value?: any) {}
}
