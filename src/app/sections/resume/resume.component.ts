import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements AfterViewInit {

  experience = [
    {
      title: 'Lead Developer',
      company: 'Blockdots, London',
      year: '2021 – Present',
      description:
        'Designed and developed scalable web applications with a focus on performance and user experience.',
    },
    {
      title: 'Frontend Engineer',
      company: 'Creative Studio',
      year: '2019 – 2021',
      description:
        'Built responsive UI systems and reusable Angular components for enterprise platforms.',
    },
    {
      title: 'Junior Developer',
      company: 'TechSoft Ltd',
      year: '2017 – 2019',
      description:
        'Collaborated on web applications and improved performance through optimized front-end practices.',
    },
  ];

  education = [
    {
      title: 'Bachelor of Computer Science',
      company: 'University of London',
      year: '2016 – 2020',
      description:
        'Focused on software engineering, algorithms, and modern web development practices.',
    },
    {
      title: 'Web Development Certification',
      company: 'Online Academy',
      year: '2018',
      description:
        'Completed intensive training in front-end frameworks and UI architecture.',
    },
    {
      title: 'Higher Secondary Education',
      company: 'St. Mary’s College',
      year: '2014 – 2016',
      description:
        'Studied mathematics and computer science fundamentals.',
    },
  ];

  @ViewChildren('leftCard') leftCards!: QueryList<ElementRef>;
  @ViewChildren('rightCard') rightCards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
  setTimeout(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    this.leftCards.forEach(card =>
      observer.observe(card.nativeElement)
    );

    this.rightCards.forEach(card =>
      observer.observe(card.nativeElement)
    );
  });
}
}