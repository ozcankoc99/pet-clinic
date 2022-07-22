import { Component, Inject, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { MenuOwner, MENU_OWNER_INJECTION_TOKEN } from '../model/menu-owner';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(MENU_OWNER_INJECTION_TOKEN) private menuOwner: MenuOwner
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        if (e instanceof NavigationStart) {
          console.log(
            '🚀 ~ file: breadcrumbs.component.ts ~ line 18 ~ BreadcrumbsComponent ~ .subscribe ~ e',
            e
          );
          const parents = this.menuOwner.findMenuItemAndParentsByLink(e.url);
          console.log(
            '🚀 ~ file: breadcrumbs.component.ts ~ line 24 ~ BreadcrumbsComponent ~ .subscribe ~ parents',
            parents
          );
        }
      });
  }
}
