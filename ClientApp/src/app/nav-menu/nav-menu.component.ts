import {Component, Input, ViewChild} from '@angular/core';
import { MatDrawer } from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('toggleDisableClose', [
      state('pin', style({})),
      state('pin-icon', style({})),
      state('unpin', style({
        transform: 'rotate(45deg)',
      })),
      state('unpin-icon', style({
        fontSize: '18px',
      })),
      transition('* => *', [
        animate('0.3s'),
      ]),
    ]),
  ],
})
export class NavMenuComponent {
  navigationItems = [{
    displayName: "Home",
    link: "/",
    icon: "home",
  }, {
    displayName: "Counter",
    link: "/counter",
    icon: "calculate",
  }, {
    displayName: "Fetch Data",
    link: "/fetch-data",
    icon: "get_app",
  }];

  isPinned = false;

  @Input() appmenu: MatDrawer;
  @ViewChild('disableCloseToggle') disableCloseToggle: MatButton;

  ngOnInit() {
  }

  isPinnable() {
    return this.appmenu.mode == 'side';
  }

  toggleDisableClose() {
    this.isPinned = !this.isPinned;
  }

  navItemClick() {
    if (!this.isPinned)
      this.appmenu.close();
  }
}
