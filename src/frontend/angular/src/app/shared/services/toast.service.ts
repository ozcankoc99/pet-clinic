import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private zone: NgZone) {}
  public success(message: string, duration = 5000) {
    this.open(message, 'success', duration);
  }
  public warn(message: string, duration = 5000) {
    this.open(message, 'warning', duration);
  }
  public info(message: string, duration = 5000) {
    this.open(message, 'info', duration);
  }
  public error(message: string, duration = 5000) {
    this.open(message, 'error', duration);
  }
  open(message: string, type = 'success', duration = 5000) {
    console.log(
      `🚀 ~ file: toast.service.ts ~ line 21 ~ ToastService ~ open ~ message: ${message}, type = ${type}, duration = ${duration}`
    );
    // this.zone.run(() => {
    //   this.snackBar.open(message, '', {
    //     duration,
    //     panelClass: ['snackbar-' + type],
    //   });
    // });
  }
}
