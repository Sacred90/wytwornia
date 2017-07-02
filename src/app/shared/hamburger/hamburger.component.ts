import { Component }    from '@angular/core';
import { Location }             from '@angular/common';

import { 
  RouterModule,
  Router,
  NavigationEnd 
}                               from '@angular/router';

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {

  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((event) => {
      this.adjustHamburger(event);

    })
  }

  private isOpen = true;
  private isBlack = true;

  adjustHamburger(event): void {
    if (event instanceof NavigationEnd) {
      if(this.location.path() === "/menu") {
        this.isOpen = false;
      }
      if(this.location.path() === "/start") {
        this.isBlack = false;
      }
      else {
        this.isBlack = true;
      }
    }
  }

  toggleOpen(): void {
    this.isOpen = !this.isOpen
    if (this.isOpen) {
      this.location.back();
    } else {
      this.router.navigate(['/menu']);
    } 
  }

}