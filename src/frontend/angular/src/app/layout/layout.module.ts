import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { NoLayoutComponent } from './no-layout/no-layout.component';


@NgModule({
  declarations: [
    ShellLayoutComponent,
    NoLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
