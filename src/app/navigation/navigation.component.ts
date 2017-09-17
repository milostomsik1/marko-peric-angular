import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})

export class NavigationComponent {
  navigationLinks: object[] = [
    {
      route: '/home',
      icon: 'fa fa-lg fa-home',
      name: 'Home'
    },
    {
      route: '/about',
      icon: 'fa fa-lg fa-info',
      name: 'About'
    },
    {
      route: '/services',
      icon: 'fa fa-lg fa-tasks',
      name: 'Services'
    },
    {
      route: '/portfolio',
      icon: 'fa fa-lg fa-photo',
      name: 'Portfolio'
    },
    {
      route: '/contact',
      icon: 'fa fa-lg fa-address-book-o',
      name: 'Contact'
    }
  ]
}
