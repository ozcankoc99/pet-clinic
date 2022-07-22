import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { EventTypes } from 'src/app/shared/model/event-types';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { MenuItem } from '../model/menu-item';
import { MenuUtils } from '../utils/menu-util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    MenuUtils.processTreeNode(this.rootMenu, 0, undefined);
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

  rootMenu: Partial<MenuItem> = {
    sortOrder: 10,
    text: 'ALL',
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
            link: 'owners-list',
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
        sortOrder: 10,
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
    ],
  };
}
