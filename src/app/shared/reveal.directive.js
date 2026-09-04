import { Directive, ElementRef, inject, input } from '@angular/core';
import { animate, stagger } from 'animejs';
import { MotionService } from './motion.service';
import * as i0 from "@angular/core";
export class RevealDirective {
    children = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "children" }] : /* istanbul ignore next */ []));
    axis = input('y', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "axis" }] : /* istanbul ignore next */ []));
    distance = input(30, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "distance" }] : /* istanbul ignore next */ []));
    host = inject((ElementRef));
    motion = inject(MotionService);
    observer;
    animation;
    ngAfterViewInit() {
        const element = this.host.nativeElement;
        const targets = this.children() ? Array.from(element.querySelectorAll(this.children())) : [element];
        targets.forEach((target) => { target.style.opacity = '0'; });
        this.observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting)
                return;
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
    ngOnDestroy() { this.observer?.disconnect(); this.animation?.cancel(); }
    static ɵfac = function RevealDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RevealDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RevealDirective, selectors: [["", "phoenixReveal", ""]], inputs: { children: [1, "children"], axis: [1, "axis"], distance: [1, "distance"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RevealDirective, [{
        type: Directive,
        args: [{ selector: '[phoenixReveal]' }]
    }], null, { children: [{ type: i0.Input, args: [{ isSignal: true, alias: "children", required: false }] }], axis: [{ type: i0.Input, args: [{ isSignal: true, alias: "axis", required: false }] }], distance: [{ type: i0.Input, args: [{ isSignal: true, alias: "distance", required: false }] }] }); })();
