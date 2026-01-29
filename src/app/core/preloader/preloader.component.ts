import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [NgFor],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.scss'
})
export class PreloaderComponent implements OnInit {
  letters = 'SREEKANTH'.split('');
  ngOnInit() {
    document.body.style.overflow='hidden';
  }
}
