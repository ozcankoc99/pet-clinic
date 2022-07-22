import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogItem } from '../model/log.item';
import { Utils } from '../util/utils';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class LogService {
  messages: LogItem[] = [];
  messages$: BehaviorSubject<LogItem[]> = new BehaviorSubject<LogItem[]>(
    this.messages
  );

  add(message: string, item?: any) {
    const itemCycleFree = Utils.removeCycle(item); // cycle'ı olan object eklersek, json viewer ve jsonpipe hata veriyor.
    const newItem = new LogItem(message, itemCycleFree);
    this.messages.unshift(newItem);
    this.messages$.next(this.messages);
  }
  clear() {
    this.messages = [];
    this.messages$.next(this.messages);
  }
}
