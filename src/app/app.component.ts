import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateY(-100%) scale(0.5)'
          }),
          {optional: true}),
        query(':leave',
          animate('0.6s ease-in',
            style({
              position: 'fixed',
              width: '100%',
              opacity: 0.5,
              transform: 'translateY(100%) scale(0.5)'
            })
          ),
        {optional: true}),
        query(':enter',
          animate('0.6s ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0%) scale(1)'
            })
          ),
        {optional: true}),
      ])
    ])
  ]
})

export class AppComponent {
  constructor(private router: Router) {
  }

  getRoute() {
    return this.router.url;
  }
}
