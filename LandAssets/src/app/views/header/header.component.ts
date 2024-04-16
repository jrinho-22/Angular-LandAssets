import { Component, HostListener } from '@angular/core';
import menuItems from  './menuItems'
import { IMenuItems } from  './interfaceMenuItems'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  isScrolledDown: boolean = false;
  hoverItem: string = '';
  hoverChildrenItem: string = '';
  items: IMenuItems[] = menuItems

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolledDown =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0) > 5;
  }

  onMouseLeave() {
    this.hoverItem = '';
  }

  onMouseLeaveGran() {
    this.hoverChildrenItem = '';
  }

  onMouseEnter(item: string) {
    this.hoverItem = item;
  }

  onMouseEnterGran(item: string) {
    this.hoverChildrenItem = item;
  }
}
