import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ShellLayoutComponent } from './shell-layout/shell-layout.component';
import { NoLayoutComponent } from './no-layout/no-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuNotificationsComponent } from './top-menu/top-menu-notifications/top-menu-notifications.component';
import { TopMenuMessagesComponent } from './top-menu/top-menu-messages/top-menu-messages.component';
import { TopMenuSearchComponent } from './top-menu/top-menu-search/top-menu-search.component';
import { TopMenuNavComponent } from './top-menu/top-menu-nav/top-menu-nav.component';

@NgModule({
  declarations: [
    ShellLayoutComponent,
    NoLayoutComponent,
    SidebarComponent,
    TopMenuComponent,
    FooterComponent,
    TopMenuNotificationsComponent,
    TopMenuMessagesComponent,
    TopMenuSearchComponent,
    TopMenuNavComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
