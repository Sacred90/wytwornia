import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
}                   from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            
            opacity: 0,
          }),
          {optional:true}),

        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})

export class AppComponent {
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
