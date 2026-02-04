import { Component, OnDestroy, OnInit, ElementRef,ViewChild,AfterViewInit} from '@angular/core';
import { concat,
  concatMap,
  delay,
  from,
  interval,
  map,
  of,
  Subject,
  takeUntil,
  take,
  repeat } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit,OnDestroy,AfterViewInit{
  roles:string[]=['Web Developer','Web Designer','Painter','Photographer'];
  text='';
  destroy$ = new Subject<void>();
  experienceCount = 0;
  projectsCount = 0;
  @ViewChild('statsBlock') statsBlock!:ElementRef;
  private observer!:IntersectionObserver;
  private hasAnimated = false;
  private isAnimating = false;
  private hasEntered = false;

  ngOnInit(): void {
    this.buildTypingStream()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.text = value;
      });      
  }
  ngAfterViewInit(): void {
    if (!this.statsBlock) return;
    this.observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !this.isAnimating) {
      this.isAnimating = true;

      this.animateCounter('experience', 10, 1200);
      this.animateCounter('projects', 75, 1200);
    }

    if (!entry.isIntersecting) {
      this.isAnimating = false;
      this.experienceCount = 0;
      this.projectsCount = 0;
    }
  },
  { threshold: 0.4 }
);
    this.observer.observe(this.statsBlock.nativeElement);
  }
  private animateCounter(
    type: 'experience' | 'projects',
    target: number,
    duration: number
  ) {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      if (type === 'experience') {
        this.experienceCount = value;
      } else {
        this.projectsCount = value;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.observer?.disconnect();
    }
     //  Type word
  typeWord(word: string) {
    return interval(200).pipe(
      map(i => word.slice(0, i + 1)),
      take(word.length)
    );
  }
  //  Delete letters
  deleteWord(word: string) {
    return interval(70).pipe(
      map(i => word.slice(0, word.length - i - 1)),
      take(word.length)
    );
  }
    // building typing stream
    buildTypingStream(){
      return from(this.roles).pipe(concatMap(role=>concat(this.typeWord(role),of(role).pipe(delay(300)))),repeat())
  }
   
}
