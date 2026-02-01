import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSticky=false;
  @HostListener('window:scroll')
  onScroll() {
  this.isSticky = window.scrollY > 60;
}
  menuOpen = false;
  toggleMenu(){
    this.menuOpen=!this.menuOpen;
    document.body.classList.toggle('menu-open', this.menuOpen);
  }
  closeMenu(){
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }

}
