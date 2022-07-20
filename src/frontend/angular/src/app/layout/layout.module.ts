import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { NoLayoutComponent } from './no-layout/no-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ShellLayoutComponent,
    NoLayoutComponent,
    SidebarComponent,
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
