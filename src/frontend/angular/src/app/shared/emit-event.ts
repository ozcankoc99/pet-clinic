import { Events } from './events';

export class EmitEvent {
  constructor(public name: Events, public value?: any) {}
}
