import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, computed, inject, signal } from '@angular/core';
import { animate, createTimeline, stagger } from 'animejs';
import { LucideArrowRight, LucideCamera, LucideCheck, LucideChevronDown, LucideDynamicIcon, LucideMail, LucideMapPin, LucideMenu, LucideMessageCircle, LucidePenTool, LucidePrinter, LucideScissors, LucideX, LucideZap } from '@lucide/angular';
import { MotionService } from './shared/motion.service';
import { RevealDirective } from './shared/reveal.directive';

type Category = 'Todos' | 'Carteleria' | 'Ploteos' | 'Vidrieras';

@Component({ selector: 'app-root', imports: [LucideDynamicIcon, RevealDirective], templateUrl: './app.html', styleUrl: './app.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class App implements AfterViewInit, OnDestroy {
  readonly icons = {
    ArrowRight: LucideArrowRight,
    Check: LucideCheck,
    ChevronDown: LucideChevronDown,
    Instagram: LucideCamera,
    Mail: LucideMail,
    MapPin: LucideMapPin,
    Menu: LucideMenu,
    MessageCircle: LucideMessageCircle,
    PenTool: LucidePenTool,
    Printer: LucidePrinter,
    Scissors: LucideScissors,
    X: LucideX,
    Zap: LucideZap,
  };
  readonly menuOpen = signal(false);
  readonly category = signal<Category>('Todos');
  readonly categories: Category[] = ['Todos', 'Carteleria', 'Ploteos', 'Vidrieras'];
  readonly services = [
    { icon: LucidePrinter, number: '01', title: 'Impresion gran formato', text: 'Color preciso y terminaciones impecables para piezas que se ven de lejos.' },
    { icon: LucideZap, number: '02', title: 'Carteleria', text: 'Soluciones para interiores y exteriores pensadas para durar y comunicar.' },
    { icon: LucideScissors, number: '03', title: 'Corte laser', text: 'Cortes limpios y exactos en una amplia variedad de materiales.' },
    { icon: LucidePenTool, number: '04', title: 'Diseno grafico', text: 'Convertimos una idea suelta en una pieza lista para producir.' },
  ];
  readonly projects = [
    { category: 'Carteleria', title: 'Cartel de chapa', className: 'project-photo', label: 'Carteleria exterior', image: '/assets/laburos/carteles de chapa/b62ebe99-007a-4430-bada-c81f344bc210.png' },
    { category: 'Carteleria', title: 'Cartel de chapa instalado', className: 'project-photo', label: 'Carteleria exterior', image: '/assets/laburos/carteles de chapa/WhatsApp Image 2026-08-27 at 15.57.41 (1).jpeg' },
    { category: 'Carteleria', title: 'Cartel de lona', className: 'project-photo', label: 'Lona impresa', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 15.57.41.jpeg' },
    { category: 'Carteleria', title: 'Lona para local', className: 'project-photo', label: 'Produccion grafica', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 16.02.10.jpeg' },
    { category: 'Carteleria', title: 'Cartel promocional', className: 'project-photo', label: 'Cartel de lona', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 16.02.19.jpeg' },
    { category: 'Ploteos', title: 'Ploteo vehicular', className: 'project-photo', label: 'Vinilo y ploteo', image: '/assets/laburos/plote varios/WhatsApp Image 2026-08-27 at 16.02.04.jpeg' },
    { category: 'Vidrieras', title: 'Vidriera comercial', className: 'project-photo', label: 'Ploteo de vidrieras', image: '/assets/laburos/ploteo de vidrieras/WhatsApp Image 2026-08-27 at 16.01.53.jpeg' },
    { category: 'Vidrieras', title: 'Grafica para vidriera', className: 'project-photo', label: 'Vinilo de corte', image: '/assets/laburos/ploteo de vidrieras/WhatsApp Image 2026-08-27 at 16.02.05.jpeg' },
  ];
  readonly visibleProjects = computed(() => this.category() === 'Todos' ? this.projects : this.projects.filter((project) => project.category === this.category()));
  readonly process = [['01', 'Idea', 'Nos contas que necesitas.'], ['02', 'Diseno', 'Le damos forma y precision.'], ['03', 'Produccion', 'Lo hacemos realidad.'], ['04', 'Terminacion', 'Cuidamos cada detalle.'], ['05', 'Entrega', 'Listo para destacar.']];
  @ViewChild('hero') private hero?: ElementRef<HTMLElement>;
  @ViewChild('processSection') private processSection?: ElementRef<HTMLElement>;
  private animations: Array<{ cancel(): void }> = [];
  private processObserver?: IntersectionObserver;
  private readonly motion = inject(MotionService);

  ngAfterViewInit(): void {
    const root = this.hero?.nativeElement;
    if (root) {
      const items = root.querySelectorAll<HTMLElement>('[data-hero]');
      items.forEach((item) => item.style.opacity = '0');
      const reduced = this.motion.reduced();
      const timeline = createTimeline({ defaults: { ease: 'out(4)' } });
      timeline.add(items, { opacity: [0, 1], y: reduced ? 0 : [32, 0], scale: reduced ? 1 : [0.98, 1], duration: reduced ? 180 : 620, delay: reduced ? 0 : stagger(90) });
      this.animations.push(timeline);
      if (!reduced) root.querySelectorAll<HTMLElement>('[data-float]').forEach((item, index) => this.animations.push(animate(item, { x: index ? [-7, 7] : [-10, 10], y: index ? [8, -8] : [-6, 6], rotate: [-1.5, 1.5], duration: 6000 + index * 1200, alternate: true, loop: true, ease: 'inOutSine' })));
    }
    this.observeProcess();
  }

  selectCategory(category: Category): void {
    if (category === this.category()) return;
    const done = () => {
      this.category.set(category);
      requestAnimationFrame(() => this.animations.push(animate('.project-card', { opacity: [0, 1], y: this.motion.reduced() ? 0 : [18, 0], scale: this.motion.reduced() ? 1 : [0.97, 1], delay: this.motion.reduced() ? 0 : stagger(55), duration: 420, ease: 'out(3)' })));
    };
    if (this.motion.reduced()) return done();
    this.animations.push(animate('.projects-grid', { opacity: [1, 0], scale: [1, 0.985], duration: 180, ease: 'in(2)', onComplete: done }));
  }

  press(event: Event): void { if (!this.motion.reduced()) this.animations.push(animate(event.currentTarget as HTMLElement, { scale: [1, 0.97, 1], duration: 280, ease: 'inOut(2)' })); }

  private observeProcess(): void {
    const section = this.processSection?.nativeElement;
    if (!section) return;
    this.processObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const line = section.querySelector<HTMLElement>('.process-line-fill');
      const items = section.querySelectorAll<HTMLElement>('.process-step');
      if (line) this.animations.push(animate(line, { scaleX: [0, 1], scaleY: [0, 1], duration: this.motion.reduced() ? 200 : 950, ease: 'inOut(3)' }));
      this.animations.push(animate(items, { opacity: [0, 1], y: this.motion.reduced() ? 0 : [20, 0], delay: this.motion.reduced() ? 0 : stagger(110, { start: 250 }), duration: 520, ease: 'out(3)' }));
      this.processObserver?.disconnect();
    }, { threshold: 0.25 });
    this.processObserver.observe(section);
  }

  ngOnDestroy(): void { this.processObserver?.disconnect(); this.animations.forEach((animation) => animation.cancel()); }
}
