import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class MotionService {
    reduced = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "reduced" }] : /* istanbul ignore next */ []));
    constructor() {
        if (typeof window !== 'undefined') {
            const query = window.matchMedia('(prefers-reduced-motion: reduce)');
            this.reduced.set(query.matches);
            query.addEventListener('change', (event) => this.reduced.set(event.matches));
        }
    }
    static ɵfac = function MotionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MotionService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MotionService, factory: MotionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MotionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
