import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicRoutingModule } from './clinic-routing.module';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';


@NgModule({
  declarations: [
    OwnerListComponent
  ],
  imports: [
    CommonModule,
    ClinicRoutingModule
  ]
})
export class ClinicModule { }
