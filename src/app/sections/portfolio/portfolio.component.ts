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
      skill1:'Web',
      skill2:'Coding',
    },
    {
      title: 'Dynamic mobile app development',
      desc: 'User-focused design with attention to detail and usability.',
      icon: 'img/work-img-2.png',
      skill1:'Software',
      skill2:'Mobile',
    },
    {
      title: 'Printable professional brochure templates',
      desc: 'Fast-loading, optimized experiences across all devices.',
      icon: 'img/work-img-3.png',
      skill1:'Brochure',
      skill2:'Design',
    },
    {
      title: 'Create stunning product flexible mockups',
      desc: 'Reliable updates, fixes, and long-term support.',
      icon: 'img/work-img-4.png',
      skill1:'Brand',
      skill2:'Mockup',
    },
    {
      title: 'Making smart software smartphones',
      desc: 'Fast-loading, optimized experiences across all devices.',
      icon: 'img/work-img-5.png',
      skill1:'Music',
      skill2:'Video',
    },
    {
      title: 'Decor design vectors illustrations',
      desc: 'Reliable updates, fixes, and long-term support.',
      icon: 'img/work-img-6.png',
      skill1:'Design',
      skill2:'Art',
    },
  ];
}
