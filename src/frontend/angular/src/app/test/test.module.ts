import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { SimpleTestToastComponent } from './simple-test/simple-test-toast/simple-test-toast.component';


@NgModule({
  declarations: [
    SimpleTestComponent,
    SimpleTestToastComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
