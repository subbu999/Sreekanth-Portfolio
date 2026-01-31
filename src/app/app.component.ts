import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { PreloaderComponent } from './core/preloader/preloader.component';
import { PreloaderService } from './core/services/preloader.service';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf, PreloaderComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Sreekanth-portfolio';
  constructor(public preloaderService:PreloaderService){}
  ngOnInit(): void {
    this.preloaderService.hide();
  }
}
