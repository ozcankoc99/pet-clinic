import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoLayoutComponent } from './no-layout/no-layout.component';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clinic',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'clinic',
        loadChildren: () =>
          import('../clinic/clinic.module').then((m) => m.ClinicModule),
      },
    ],
  },
  {
    path: '',
    component: NoLayoutComponent,
    children: [
      {
        path: 'security',
        loadChildren: () =>
          import('../security/security.module').then((m) => m.SecurityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
