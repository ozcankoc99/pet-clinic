import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { Events } from 'src/app/shared/events';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(private eventBusService: EventBusService) {}

  ngOnInit(): void {
    this.eventBusService.on(Events.ToggleSideBar, (_: any) => {
      this.isCollapsed = !this.isCollapsed;
      console.log(
        '🚀 ~ file: sidebar.component.ts ~ line 17 ~ SidebarComponent ~ this.eventBusService.on ~ this.isCollapsed',
        this.isCollapsed
      );
    });
  }
}
