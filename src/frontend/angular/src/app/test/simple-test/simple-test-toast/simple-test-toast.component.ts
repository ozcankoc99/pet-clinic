import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-simple-test-toast',
  templateUrl: './simple-test-toast.component.html',
  styles: [],
})
export class SimpleTestToastComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}
