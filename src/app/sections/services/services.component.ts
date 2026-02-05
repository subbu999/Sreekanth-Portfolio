import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
services = [
    {
      title: 'Web Development',
      desc: 'Modern, responsive websites built with clean, scalable code.',
      icon: 'img/icon-1.png',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-focused design with attention to detail and usability.',
      icon: 'img/icon-2.png',
    },
    {
      title: 'Performance Optimization',
      desc: 'Fast-loading, optimized experiences across all devices.',
      icon: 'img/icon-3.png',
    },
    {
      title: 'Maintenance & Support',
      desc: 'Reliable updates, fixes, and long-term support.',
      icon: 'img/icon-4.png',
    },
  ];
}
