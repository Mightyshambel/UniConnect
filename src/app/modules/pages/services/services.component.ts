import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  sections = [
    {
      icon: 'path/to/icon1.svg',
      title: 'WHY COLLEGE MATTERS',
      description: 'College is worth it. Your future is worth it. You are worth it.',
      link: '#',
      linkText: 'Learn why college matters >'
    },
    {
      icon: 'path/to/icon2.svg',
      title: 'PAYING FOR COLLEGE',
      description: 'There are lots of options available to you. We can help you find them.',
      link: '#',
      linkText: 'Learn how to pay for college >'
    },
    {
      icon: 'path/to/icon3.svg',
      title: 'YOUR COLLEGE ROADMAP',
      description: 'The path may seem unclear. We can help you find your way.',
      link: '#',
      linkText: 'Learn how to get to college >'
    }
  ];
}
