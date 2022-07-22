import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { EventTypes } from 'src/app/shared/model/event-types';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { MenuItem } from '../model/menu-item';
import { MenuOwner } from '../model/menu-owner';
import { MenuUtils } from '../utils/menu-util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SidebarComponent implements OnInit, MenuOwner {
  isCollapsed: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private eventBusService: EventBusService
  ) {}

  findMenuItemAndParentsByLink(url: string): Partial<MenuItem>[] {
    return MenuUtils.findMenuItemAndParentsByLink(url, this.rootMenu);
  }

  ngOnInit(): void {
    console.log(
      '🚀 ~ file: sidebar.component.ts ~ line 30 ~ SidebarComponent ~ ngOnInit ~ this.rootMenu',
      this.rootMenu
    );
    this.eventBusService.on(EventTypes.ToggleSideBar, (_: any) => {
      this.isCollapsed = !this.isCollapsed;
      const toRemove = this.isCollapsed ? 'sidebar-collapse' : 'sidebar-mini';
      const toAdd = this.isCollapsed ? 'sidebar-mini' : 'sidebar-collapse';
      this.document.body.classList.remove(toRemove);
      this.document.body.classList.add(toAdd);
      console.log(
        '🚀 ~ file: sidebar.component.ts ~ line 17 ~ SidebarComponent ~ this.eventBusService.on ~ this.isCollapsed',
        this.isCollapsed
      );
    });
  }
  rootMenuData: Partial<MenuItem> | undefined = {
    sortOrder: 10,
    text: 'Home',
    isExpanded: true,
    children: [
      {
        sortOrder: 10,
        text: 'Owners',
        tooltip: 'Patient Owners',
        link: './',
        icon: 'fa-solid fa-people-group',
        isExpanded: true,
        children: [
          {
            sortOrder: 10,
            text: 'List Owners',
            link: '/clinic/owners-list',
            tooltip: 'List All Owners',
            icon: 'fa-solid fa-address-book',
            children: [],
          },
          {
            sortOrder: 20,
            text: 'Add Owner',
            tooltip: 'Add a new Owner',
            link: 'owners-add',
            icon: 'fa-solid fa-plus',
            children: [],
          },
          {
            sortOrder: 30,
            text: 'Find Owners',
            tooltip: 'Search Owner',
            link: 'owners-search',
            icon: 'fa-solid fa-magnifying-glass',
            children: [],
          },
        ],
      },
      {
        sortOrder: 20,
        text: 'Pets',
        tooltip: 'Patients',
        icon: 'fa-solid fa-cat',
        link: './',
        isExpanded: true,
        children: [
          {
            sortOrder: 10,
            text: 'List Pets',
            tooltip: 'List All Pets',
            link: 'pet-list',
            icon: 'fa-solid fa-paw',
            children: [],
          },
          {
            sortOrder: 20,
            text: 'Add Owner',
            tooltip: 'Add a new Pet',
            link: 'add-pet',
            icon: 'fa-solid fa-circle-plus',
            children: [],
          },
          {
            sortOrder: 30,
            text: 'Find Pets',
            tooltip: 'Search Owner',
            link: 'find-pet',
            icon: 'fa-solid fa-magnifying-glass',
            children: [],
          },
        ],
      },
      {
        sortOrder: 50,
        text: 'Test',
        tooltip: 'test Pages',
        icon: 'fa-solid fa-flask-vial',
        link: './',
        isExpanded: true,
        children: [
          {
            sortOrder: 10,
            text: 'Simple',
            tooltip: 'Simple',
            link: '/test/simple',
            icon: 'fa-solid fa-vial',
            children: [],
          },
        ],
      },
      {
        sortOrder: 70,
        text: 'System',
        tooltip: 'System',
        icon: 'fa-solid fa-cogs',
        link: './',
        isExpanded: true,
        children: [
          {
            sortOrder: 10,
            text: 'Login',
            tooltip: 'Sign-In',
            link: '/security/login',
            icon: 'fa-solid fa-key',
            children: [],
          },
          {
            sortOrder: 20,
            text: 'Sign Out',
            tooltip: 'Exit From System',
            link: '/security/signout',
            icon: 'fa-solid fa-power-off',
            children: [],
          },
        ],
      },
      {
        sortOrder: 90,
        text: 'Multi-Level',
        tooltip: 'Level 1 ',
        icon: 'fa-solid fa-1',
        link: './',
        badge: '18',
        badgeClass: 'badge-primary',
        isExpanded: true,
        children: [
          {
            sortOrder: 10,
            text: 'Level 2a',
            tooltip: 'Level 2a',
            link: './',
            badge: '26',
            badgeClass: 'badge-success',
            icon: 'fa-solid fa-2',
            children: [
              {
                sortOrder: 10,
                text: 'Level 3a',
                tooltip: 'Level 3a',
                link: './',
                icon: 'fa-solid fa-3',
                children: [],
              },
              {
                sortOrder: 10,
                text: 'Level 3b',
                tooltip: 'Level 3b',
                link: './',
                badge: '32',
                badgeClass: 'badge-danger',
                icon: 'fa-solid fa-3',
                children: [],
              },
            ],
          },
          {
            sortOrder: 10,
            text: 'Level 2b',
            tooltip: 'Level 2b',
            link: './',
            icon: 'fa-solid fa-2',
            children: [
              {
                sortOrder: 10,
                text: 'Level 3c',
                tooltip: 'Level 3c',
                link: './',
                icon: 'fa-solid fa-3',
                badge: '33',
                badgeClass: 'badge-warning',
                children: [],
              },
              {
                sortOrder: 10,
                text: 'Level 3d',
                tooltip: 'Level 3d',
                link: './',
                icon: 'fa-solid fa-3',
                badge: '30',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };
  rootMenu: Partial<MenuItem> | undefined = MenuUtils.processTreeNode(
    this.rootMenuData,
    0,
    undefined
  );
}
