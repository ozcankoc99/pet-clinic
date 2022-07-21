import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventTypes } from 'src/app/shared/event-types';

@Component({
  selector: 'app-top-menu-nav',
  templateUrl: './top-menu-nav.component.html',
  styleUrls: ['./top-menu-nav.component.css'],
})
export class TopMenuNavComponent implements OnInit {
  constructor(private eventBusService: EventBusService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.eventBusService.emit(EventTypes.ToggleSideBar, null);
  }
}
