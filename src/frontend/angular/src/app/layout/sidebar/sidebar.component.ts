import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { EventTypes } from 'src/app/shared/model/event-types';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

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
}
