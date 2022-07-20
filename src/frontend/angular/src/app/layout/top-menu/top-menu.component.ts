import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { Events } from 'src/app/shared/events';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  constructor(private eventBusService: EventBusService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.eventBusService.emit(Events.ToggleSideBar, null);
  }
}
