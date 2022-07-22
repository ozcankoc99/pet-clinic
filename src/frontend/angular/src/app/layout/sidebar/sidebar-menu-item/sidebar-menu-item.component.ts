import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/shared/util/utils';
import { MenuItem } from '../../model/menu-item';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styles: [],
})
export class SidebarMenuItemComponent implements OnInit {
  @Input() menuItem: Partial<MenuItem> = {};
  constructor() {}

  ngOnInit(): void {}
  hasChildren() {
    return Utils.hasOneOrMoreItems(this.menuItem?.children);
  }
  toggleExpanded() {
    this.menuItem.isExpanded = !this.menuItem?.isExpanded;
  }
}
