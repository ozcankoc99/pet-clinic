import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ToastEvent } from 'src/app/shared/model/toast-event';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Utils } from 'src/app/shared/util/utils';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToasterComponent implements OnInit {
  currentToasts: ToastEvent[] = [];

  constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents.subscribe((toasts: ToastEvent) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        message: toasts.message,
        delay: toasts.delay,
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges();
      window.setTimeout(() => {
        Utils.RemoveElementFromObjectArray(this.currentToasts, currentToast);
        this.cdr.detectChanges();
      }, currentToast.delay);
    });
  }
}
