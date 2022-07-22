import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SimpleTestComponent } from './simple-test/simple-test.component';


@NgModule({
  declarations: [
    SimpleTestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
