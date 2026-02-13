import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { PreloaderComponent } from './core/preloader/preloader.component';
import { PreloaderService } from './core/services/preloader.service';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ClientsComponent } from './sections/clients/clients.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf, 
    PreloaderComponent,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ResumeComponent,
    ClientsComponent
  ],
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
