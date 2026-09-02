import { AfterViewInit, Directive, ElementRef, OnDestroy, inject, input } from '@angular/core';
import { animate, stagger } from 'animejs';
import { MotionService } from './motion.service';

@Directive({ selector: '[phoenixReveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  readonly children = input<string>('');
  readonly axis = input<'x' | 'y'>('y');
  readonly distance = input(30);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly motion = inject(MotionService);
  private observer?: IntersectionObserver;
  private animation?: ReturnType<typeof animate>;

  ngAfterViewInit(): void {
    const element = this.host.nativeElement;
    const targets: HTMLElement[] = this.children() ? Array.from(element.querySelectorAll(this.children())) as HTMLElement[] : [element];
    targets.forEach((target) => { target.style.opacity = '0'; });
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.animation = animate(targets, {
        opacity: [0, 1],
        ...(this.motion.reduced() ? {} : this.axis() === 'x' ? { x: [this.distance(), 0] } : { y: [this.distance(), 0] }),
        duration: this.motion.reduced() ? 220 : 680,
        delay: this.motion.reduced() || targets.length === 1 ? 0 : stagger(75),
        ease: 'out(3)',
      });
      this.observer?.disconnect();
    }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
    this.observer.observe(element);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); this.animation?.cancel(); }
}
