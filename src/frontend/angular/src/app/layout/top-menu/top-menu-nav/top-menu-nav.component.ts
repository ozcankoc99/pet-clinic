import { Component, OnInit } from '@angular/core';
import { EventTypes } from 'src/app/shared/model/event-types';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

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
