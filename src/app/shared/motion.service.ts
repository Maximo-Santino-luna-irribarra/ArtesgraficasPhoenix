import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionService {
  readonly reduced = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      const query = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.reduced.set(query.matches);
      query.addEventListener('change', (event) => this.reduced.set(event.matches));
    }
  }
}
