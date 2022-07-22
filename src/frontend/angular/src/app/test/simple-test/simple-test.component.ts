import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrls: ['./simple-test.component.css'],
})
export class SimpleTestComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
}
