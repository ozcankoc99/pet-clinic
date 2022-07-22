import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';

const routes: Routes = [
  { path: '', component: OwnerListComponent },
  { path: 'owners-list', component: OwnerListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicRoutingModule {}
