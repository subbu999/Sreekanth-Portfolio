import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
loading=signal(true);
private MIN_DURATION = 2800; 
hide() {
    const start = performance.now();

    requestAnimationFrame(() => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(this.MIN_DURATION - elapsed, 0);

      setTimeout(() => {
        this.loading.set(false);
        document.body.style.overflow = 'auto';
      }, remaining);
    });
  }
}
