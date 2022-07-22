import { InjectionToken } from '@angular/core';
import { MenuItem } from './menu-item';

export interface MenuOwner {
  findMenuItemAndParentsByLink(url: string): Partial<MenuItem>[];
}
export const MENU_OWNER_INJECTION_TOKEN = new InjectionToken<MenuOwner>(
  'MENU_OWNER_INJECTION_TOKEN'
);
