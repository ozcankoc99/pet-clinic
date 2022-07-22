import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from '../model/toast-event';
import { ToastEventTypes } from '../model/toast-event-types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  success(title: string, message: string) {
    this.showToast(title, message, ToastEventTypes.Success);
  }

  info(title: string, message: string) {
    this.showToast(title, message, ToastEventTypes.Info);
  }

  warn(title: string, message: string) {
    this.showToast(title, message, ToastEventTypes.Warning);
  }

  error(title: string, message: string) {
    this.showToast(title, message, ToastEventTypes.Error);
  }

  showToast(
    title: string,
    message: string,
    type: ToastEventTypes,
    delay: number = 5000
  ) {
    this._toastEvents.next({
      message,
      title,
      type,
      delay,
    });
  }
}
