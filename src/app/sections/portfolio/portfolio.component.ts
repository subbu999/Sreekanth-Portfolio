import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
works = [
    {
      title: 'Document Manager Application',
      desc: 'Modern, responsive websites built with clean, scalable code.',
      icon: 'img/work-img-1.png',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-focused design with attention to detail and usability.',
      icon: 'img/work-img-1.png',
    },
    {
      title: 'Performance Optimization',
      desc: 'Fast-loading, optimized experiences across all devices.',
      icon: 'img/work-img-1.png',
    },
    {
      title: 'Maintenance & Support',
      desc: 'Reliable updates, fixes, and long-term support.',
      icon: 'img/work-img-1.png',
    },
    {
      title: 'Performance Optimization',
      desc: 'Fast-loading, optimized experiences across all devices.',
      icon: 'img/work-img-1.png',
    },
    {
      title: 'Maintenance & Support',
      desc: 'Reliable updates, fixes, and long-term support.',
      icon: 'img/work-img-1.png',
    },
  ];
}
