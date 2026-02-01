import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class HeroComponent implements OnInit,OnDestroy{
  roles:string[]=['Web Developer','Web Designer','Painter','Photographer'];
  text='';
  destroy$ = new Subject<void>();
  ngOnInit(): void {
    this.buildTypingStream()
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        this.text = value;
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    }
     //  Type word
  typeWord(word: string) {
    return interval(110).pipe(
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
