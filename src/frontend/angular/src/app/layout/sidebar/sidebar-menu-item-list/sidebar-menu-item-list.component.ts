import { Component, Input, OnInit, Optional } from '@angular/core';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-sidebar-menu-item-list',
  templateUrl: './sidebar-menu-item-list.component.html',
  styles: [],
})
export class SidebarMenuItemListComponent implements OnInit {
  @Input() menuItems: Partial<MenuItem>[] = [];
  @Input() parent: Partial<MenuItem> | undefined = {};
  constructor() {}

  ngOnInit(): void {}
}
