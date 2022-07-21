import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventTypes } from 'src/app/shared/event-types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(
    private eventBusService: EventBusService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.eventBusService.on(EventTypes.ToggleSideBar, (_: any) => {
      this.isCollapsed = !this.isCollapsed;
      this.document.body.classList.toggle('sidebar-collapse');
      this.document.body.classList.toggle('sidebar-mini');

      console.log(
        '🚀 ~ file: sidebar.component.ts ~ line 17 ~ SidebarComponent ~ this.eventBusService.on ~ this.isCollapsed',
        this.isCollapsed
      );
    });
  }
}
