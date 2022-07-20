import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventTypes } from 'src/app/shared/event-types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(private eventBusService: EventBusService) {}

  ngOnInit(): void {
    this.eventBusService.on(EventTypes.ToggleSideBar, (_: any) => {
      this.isCollapsed = !this.isCollapsed;
      console.log(
        '🚀 ~ file: sidebar.component.ts ~ line 17 ~ SidebarComponent ~ this.eventBusService.on ~ this.isCollapsed',
        this.isCollapsed
      );
    });
  }
}
