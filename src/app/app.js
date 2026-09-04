import { ChangeDetectionStrategy, Component, HostListener, ViewChild, computed, inject, signal } from '@angular/core';
import { animate, createTimeline, stagger } from 'animejs';
import { LucideArrowRight, LucideCamera, LucideCheck, LucideChevronDown, LucideDynamicIcon, LucideMail, LucideMapPin, LucideMenu, LucideMessageCircle, LucidePenTool, LucidePrinter, LucideScissors, LucideX, LucideZap, LucideZoomIn } from '@lucide/angular';
import { MotionService } from './shared/motion.service';
import { RevealDirective } from './shared/reveal.directive';
import * as i0 from "@angular/core";
const _c0 = ["hero"];
const _c1 = ["processSection"];
const _forTrack0 = ($index, $item) => $item.number;
const _forTrack1 = ($index, $item) => $item.image;
const _forTrack2 = ($index, $item) => $item[0];
function App_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "a", 72);
    i0.ɵɵlistener("click", function App_Conditional_17_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(2, "Servicios");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 73);
    i0.ɵɵlistener("click", function App_Conditional_17_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(4, "Trabajos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 74);
    i0.ɵɵlistener("click", function App_Conditional_17_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(6, "Proceso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 75);
    i0.ɵɵlistener("click", function App_Conditional_17_Template_a_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.menuOpen.set(false)); });
    i0.ɵɵtext(8, "Contacto");
    i0.ɵɵelementEnd()();
} }
function App_For_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 37)(1, "div", 76)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(service_r3.number);
    i0.ɵɵadvance();
    i0.ɵɵproperty("lucideIcon", service_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r3.text);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r1.icons.ArrowRight);
} }
function App_For_79_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 79);
    i0.ɵɵlistener("click", function App_For_79_Template_button_click_0_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectCategory(item_r5)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r1.category() === item_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5);
} }
function App_For_82_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "button", 80);
    i0.ɵɵlistener("click", function App_For_82_Template_button_click_1_listener() { const project_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openProject(project_r7)); });
    i0.ɵɵelement(2, "img", 81);
    i0.ɵɵelementStart(3, "span", 82);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 26);
    i0.ɵɵtext(5, " Ampliar");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 83)(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("project-card " + project_r7.className);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "Ampliar " + project_r7.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", project_r7.image, i0.ɵɵsanitizeUrl)("alt", project_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r1.icons.ZoomIn);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(project_r7.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r7.title);
} }
function App_For_123_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 54);
    i0.ɵɵelement(1, "span", 84);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(step_r8[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r8[1]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r8[2]);
} }
function App_Conditional_139_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵlistener("click", function App_Conditional_139_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeFromBackdrop($event)); });
    i0.ɵɵelementStart(1, "button", 86);
    i0.ɵɵlistener("click", function App_Conditional_139_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeProject()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "figure");
    i0.ɵɵelement(4, "img", 88);
    i0.ɵɵelementStart(5, "figcaption")(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const project_r10 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", project_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r1.icons.X);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", project_r10.image, i0.ɵɵsanitizeUrl)("alt", project_r10.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(project_r10.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(project_r10.title);
} }
export class App {
    icons = {
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
        ZoomIn: LucideZoomIn,
    };
    menuOpen = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "menuOpen" }] : /* istanbul ignore next */ []));
    category = signal('Todos', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "category" }] : /* istanbul ignore next */ []));
    categories = ['Todos', 'Carteleria', 'Ploteos', 'Vidrieras'];
    services = [
        { icon: LucidePrinter, number: '01', title: 'Impresion gran formato', text: 'Color preciso y terminaciones impecables para piezas que se ven de lejos.' },
        { icon: LucideZap, number: '02', title: 'Carteleria', text: 'Soluciones para interiores y exteriores pensadas para durar y comunicar.' },
        { icon: LucideScissors, number: '03', title: 'Corte laser', text: 'Cortes limpios y exactos en una amplia variedad de materiales.' },
        { icon: LucidePenTool, number: '04', title: 'Diseno grafico', text: 'Convertimos una idea suelta en una pieza lista para producir.' },
    ];
    projects = [
        { category: 'Carteleria', title: 'Cartel de chapa', className: 'project-photo', label: 'Carteleria exterior', image: '/assets/laburos/carteles de chapa/b62ebe99-007a-4430-bada-c81f344bc210.png' },
        { category: 'Carteleria', title: 'Cartel de chapa instalado', className: 'project-photo', label: 'Carteleria exterior', image: '/assets/laburos/carteles de chapa/WhatsApp Image 2026-08-27 at 15.57.41 (1).jpeg' },
        { category: 'Carteleria', title: 'Cartel de lona', className: 'project-photo', label: 'Lona impresa', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 15.57.41.jpeg' },
        { category: 'Carteleria', title: 'Lona para local', className: 'project-photo', label: 'Produccion grafica', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 16.02.10.jpeg' },
        { category: 'Carteleria', title: 'Cartel promocional', className: 'project-photo', label: 'Cartel de lona', image: '/assets/laburos/carteles de lona/WhatsApp Image 2026-08-27 at 16.02.19.jpeg' },
        { category: 'Ploteos', title: 'Ploteo vehicular', className: 'project-photo', label: 'Vinilo y ploteo', image: '/assets/laburos/plote varios/WhatsApp Image 2026-08-27 at 16.02.04.jpeg' },
        { category: 'Vidrieras', title: 'Vidriera comercial', className: 'project-photo', label: 'Ploteo de vidrieras', image: '/assets/laburos/ploteo de vidrieras/WhatsApp Image 2026-08-27 at 16.01.53.jpeg' },
        { category: 'Vidrieras', title: 'Grafica para vidriera', className: 'project-photo', label: 'Vinilo de corte', image: '/assets/laburos/ploteo de vidrieras/WhatsApp Image 2026-08-27 at 16.02.05.jpeg' },
    ];
    selectedProject = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "selectedProject" }] : /* istanbul ignore next */ []));
    visibleProjects = computed(() => this.category() === 'Todos' ? this.projects : this.projects.filter((project) => project.category === this.category()), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "visibleProjects" }] : /* istanbul ignore next */ []));
    process = [['01', 'Idea', 'Nos contas que necesitas.'], ['02', 'Diseno', 'Le damos forma y precision.'], ['03', 'Produccion', 'Lo hacemos realidad.'], ['04', 'Terminacion', 'Cuidamos cada detalle.'], ['05', 'Entrega', 'Listo para destacar.']];
    hero;
    processSection;
    animations = [];
    processObserver;
    motion = inject(MotionService);
    ngAfterViewInit() {
        const root = this.hero?.nativeElement;
        if (root) {
            const items = root.querySelectorAll('[data-hero]');
            items.forEach((item) => item.style.opacity = '0');
            const reduced = this.motion.reduced();
            const timeline = createTimeline({ defaults: { ease: 'out(4)' } });
            timeline.add(items, { opacity: [0, 1], y: reduced ? 0 : [32, 0], scale: reduced ? 1 : [0.98, 1], duration: reduced ? 180 : 620, delay: reduced ? 0 : stagger(90) });
            this.animations.push(timeline);
            if (!reduced)
                root.querySelectorAll('[data-float]').forEach((item, index) => this.animations.push(animate(item, { x: index ? [-7, 7] : [-10, 10], y: index ? [8, -8] : [-6, 6], rotate: [-1.5, 1.5], duration: 6000 + index * 1200, alternate: true, loop: true, ease: 'inOutSine' })));
        }
        this.observeProcess();
    }
    selectCategory(category) {
        if (category === this.category())
            return;
        const done = () => {
            this.category.set(category);
            requestAnimationFrame(() => this.animations.push(animate('.project-card', { opacity: [0, 1], y: this.motion.reduced() ? 0 : [18, 0], scale: this.motion.reduced() ? 1 : [0.97, 1], delay: this.motion.reduced() ? 0 : stagger(55), duration: 420, ease: 'out(3)' })));
        };
        if (this.motion.reduced())
            return done();
        this.animations.push(animate('.projects-grid', { opacity: [1, 0], scale: [1, 0.985], duration: 180, ease: 'in(2)', onComplete: done }));
    }
    press(event) { if (!this.motion.reduced())
        this.animations.push(animate(event.currentTarget, { scale: [1, 0.97, 1], duration: 280, ease: 'inOut(2)' })); }
    openProject(project) {
        this.selectedProject.set(project);
        document.body.style.overflow = 'hidden';
    }
    closeProject() {
        this.selectedProject.set(null);
        document.body.style.overflow = '';
    }
    closeFromBackdrop(event) {
        if (event.target === event.currentTarget)
            this.closeProject();
    }
    closeProjectWithEscape() {
        if (this.selectedProject())
            this.closeProject();
    }
    observeProcess() {
        const section = this.processSection?.nativeElement;
        if (!section)
            return;
        this.processObserver = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting)
                return;
            const line = section.querySelector('.process-line-fill');
            const items = section.querySelectorAll('.process-step');
            if (line)
                this.animations.push(animate(line, { scaleX: [0, 1], scaleY: [0, 1], duration: this.motion.reduced() ? 200 : 950, ease: 'inOut(3)' }));
            this.animations.push(animate(items, { opacity: [0, 1], y: this.motion.reduced() ? 0 : [20, 0], delay: this.motion.reduced() ? 0 : stagger(110, { start: 250 }), duration: 520, ease: 'out(3)' }));
            this.processObserver?.disconnect();
        }, { threshold: 0.25 });
        this.processObserver.observe(section);
    }
    ngOnDestroy() { document.body.style.overflow = ''; this.processObserver?.disconnect(); this.animations.forEach((animation) => animation.cancel()); }
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], viewQuery: function App_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5)(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.hero = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.processSection = _t.first);
        } }, hostBindings: function App_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function App_keydown_escape_HostBindingHandler() { return ctx.closeProjectWithEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 170, vars: 16, consts: [["hero", ""], ["processSection", ""], [1, "site-header"], ["href", "#inicio", 1, "brand"], ["src", "/assets/logos/lgo de color.svg", "alt", "Phoenix Grafica", 1, "brand-logo"], ["href", "#servicios"], ["href", "#trabajos"], ["href", "#proceso"], ["href", "#contacto"], ["href", "#contacto", 1, "button", "button-sm", 3, "click"], ["size", "16", 3, "lucideIcon"], ["type", "button", "aria-label", "Abrir menu", 1, "menu-button", 3, "click"], [3, "lucideIcon"], [1, "mobile-menu"], ["id", "inicio", 1, "hero"], [1, "hero-photo"], [1, "hero-shade"], ["data-float", "", 1, "orb", "orb-a"], ["data-float", "", 1, "halftone"], [1, "hero-content"], ["data-hero", "", "src", "/assets/logos/lgo de color.svg", "alt", "Phoenix Grafica", 1, "hero-logo"], ["data-hero", "", 1, "eyebrow"], ["data-hero", ""], ["data-hero", "", 1, "gradient-text"], ["data-hero", "", 1, "hero-actions"], ["href", "#contacto", 1, "button", 3, "click"], ["size", "18", 3, "lucideIcon"], ["href", "#trabajos", 1, "text-link"], ["size", "17", 3, "lucideIcon"], ["data-hero", "", 1, "hero-index"], [1, "marquee"], [1, "marquee-track"], ["aria-hidden", "true"], ["id", "servicios", 1, "section", "services-section"], ["phoenixReveal", "", 1, "section-heading"], [1, "kicker"], ["phoenixReveal", "", "children", ".service-card", 1, "service-grid"], [1, "service-card"], ["id", "trabajos", 1, "section", "projects-section"], ["phoenixReveal", "", 1, "section-heading", "light"], ["aria-label", "Filtrar trabajos", 1, "filters"], ["type", "button", 3, "active"], ["phoenixReveal", "", "children", ".project-card", 1, "projects-grid"], [3, "class"], [1, "machine-section"], ["phoenixReveal", "", "axis", "x", 1, "machine-photo", 3, "distance"], [1, "photo-label"], ["phoenixReveal", "", "axis", "x", 1, "machine-copy"], ["href", "#contacto", 1, "text-link", "dark"], ["id", "proceso", 1, "section", "process-section"], ["phoenixReveal", "", 1, "center-heading"], [1, "process-wrap"], [1, "process-line"], [1, "process-line-fill"], [1, "process-step"], ["id", "contacto", 1, "cta-section"], [1, "cta-orb"], ["phoenixReveal", ""], ["href", "https://wa.me/5490000000000", "target", "_blank", "rel", "noreferrer", 1, "button", "button-light", 3, "click"], ["size", "19", 3, "lucideIcon"], ["role", "dialog", "aria-modal", "true", 1, "lightbox"], [1, "footer"], [1, "footer-main"], [1, "footer-brand"], ["src", "/assets/logos/lgo negro.svg", "alt", "Phoenix Grafica", 1, "brand-logo", "footer-logo"], [1, "footer-column"], ["href", "mailto:hola@phoenixgrafica.com"], ["size", "15", 3, "lucideIcon"], ["href", "#"], ["size", "14", 3, "lucideIcon"], [1, "footer-bottom"], ["href", "#inicio"], ["href", "#servicios", 3, "click"], ["href", "#trabajos", 3, "click"], ["href", "#proceso", 3, "click"], ["href", "#contacto", 3, "click"], [1, "service-top"], ["size", "27", 3, "lucideIcon"], ["href", "#contacto", "aria-label", "Consultar por servicio"], ["type", "button", 3, "click"], ["type", "button", 1, "project-open", 3, "click"], ["loading", "lazy", 1, "project-image", 3, "src", "alt"], [1, "project-zoom"], [1, "project-meta"], [1, "process-dot"], ["role", "dialog", "aria-modal", "true", 1, "lightbox", 3, "click"], ["type", "button", "aria-label", "Cerrar imagen", 1, "lightbox-close", 3, "click"], ["size", "24", 3, "lucideIcon"], [3, "src", "alt"]], template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 2)(1, "a", 3);
            i0.ɵɵelement(2, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "nav")(4, "a", 5);
            i0.ɵɵtext(5, "Servicios");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "a", 6);
            i0.ɵɵtext(7, "Trabajos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "a", 7);
            i0.ɵɵtext(9, "Proceso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 8);
            i0.ɵɵtext(11, "Contacto");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 9);
            i0.ɵɵlistener("click", function App_Template_a_click_12_listener($event) { return ctx.press($event); });
            i0.ɵɵtext(13, "Pedir presupuesto ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(14, "svg", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "button", 11);
            i0.ɵɵlistener("click", function App_Template_button_click_15_listener() { return ctx.menuOpen.set(!ctx.menuOpen()); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(16, "svg", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(17, App_Conditional_17_Template, 9, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "main")(19, "section", 14, 0);
            i0.ɵɵelement(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18);
            i0.ɵɵelementStart(25, "div", 19);
            i0.ɵɵelement(26, "img", 20);
            i0.ɵɵelementStart(27, "div", 21);
            i0.ɵɵelement(28, "span");
            i0.ɵɵtext(29, " Diseno - impresion - produccion");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "h1")(31, "span", 22);
            i0.ɵɵtext(32, "Hacemos realidad");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "span", 23);
            i0.ɵɵtext(34, "tus ideas.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "p", 22);
            i0.ɵɵtext(36, "Disenamos y producimos piezas graficas que hacen que tu marca se vea, se recuerde y crezca.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 24)(38, "a", 25);
            i0.ɵɵlistener("click", function App_Template_a_click_38_listener($event) { return ctx.press($event); });
            i0.ɵɵtext(39, "Pedir presupuesto ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(40, "svg", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(41, "a", 27);
            i0.ɵɵtext(42, "Ver trabajos ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(43, "svg", 28);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(44, "div", 29);
            i0.ɵɵtext(45, "PHX - 01");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "div", 30)(47, "div", 31)(48, "span");
            i0.ɵɵtext(49, "CARTELERIA - IMPRESION UV - CORTE LASER - PLOTEOS - VINILOS - DISENO - PRODUCCION - ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "span", 32);
            i0.ɵɵtext(51, "CARTELERIA - IMPRESION UV - CORTE LASER - PLOTEOS - VINILOS - DISENO - PRODUCCION - ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "section", 33)(53, "div", 34)(54, "div")(55, "span", 35);
            i0.ɵɵtext(56, "LO QUE HACEMOS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "h2");
            i0.ɵɵtext(58, "Todo lo que tu marca");
            i0.ɵɵelement(59, "br");
            i0.ɵɵtext(60, "necesita para ");
            i0.ɵɵelementStart(61, "em");
            i0.ɵɵtext(62, "destacar.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(63, "p");
            i0.ɵɵtext(64, "De la primera idea a la pieza terminada. Un solo equipo para resolver todo el proceso.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "div", 36);
            i0.ɵɵrepeaterCreate(66, App_For_67_Template, 11, 5, "article", 37, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "section", 38)(69, "div", 39)(70, "div")(71, "span", 35);
            i0.ɵɵtext(72, "TRABAJOS RECIENTES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "h2");
            i0.ɵɵtext(74, "Trabajos reales listos para mostrar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "p");
            i0.ɵɵtext(76, "Una galeria con las fotos cargadas para que se vean carteles, lonas, ploteos y vidrieras.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "div", 40);
            i0.ɵɵrepeaterCreate(78, App_For_79_Template, 2, 3, "button", 41, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "div", 42);
            i0.ɵɵrepeaterCreate(81, App_For_82_Template, 11, 8, "article", 43, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "section", 44)(84, "div", 45)(85, "span", 46);
            i0.ɵɵtext(86, "TECNOLOGIA / 01");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 47)(88, "span", 35);
            i0.ɵɵtext(89, "NUESTRA MAQUINARIA");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "h2");
            i0.ɵɵtext(91, "Precision que se");
            i0.ɵɵelement(92, "br");
            i0.ɵɵelementStart(93, "em");
            i0.ɵɵtext(94, "puede ver.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(95, "p");
            i0.ɵɵtext(96, "Trabajamos con tecnologia de impresion de gran formato para lograr colores intensos, detalles nitidos y resultados consistentes.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "ul")(98, "li");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(99, "svg", 28);
            i0.ɵɵtext(100, " Impresion UV de alta definicion");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(101, "li");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(102, "svg", 28);
            i0.ɵɵtext(103, " Amplia variedad de materiales");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(104, "li");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(105, "svg", 28);
            i0.ɵɵtext(106, " Produccion interna y controlada");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(107, "a", 48);
            i0.ɵɵtext(108, "Conoce nuestras capacidades ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(109, "svg", 26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(110, "section", 49, 1)(112, "div", 50)(113, "span", 35);
            i0.ɵɵtext(114, "COMO TRABAJAMOS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(115, "h2");
            i0.ɵɵtext(116, "De la idea a la realidad.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(117, "p");
            i0.ɵɵtext(118, "Un proceso claro, agil y acompanado de principio a fin.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(119, "div", 51)(120, "div", 52);
            i0.ɵɵelement(121, "span", 53);
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(122, App_For_123_Template, 8, 3, "article", 54, _forTrack2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(124, "section", 55);
            i0.ɵɵelement(125, "div", 56);
            i0.ɵɵelementStart(126, "div", 57)(127, "span", 35);
            i0.ɵɵtext(128, "TENES UN PROYECTO?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "h2");
            i0.ɵɵtext(130, "Hagamoslo");
            i0.ɵɵelement(131, "br");
            i0.ɵɵelementStart(132, "em");
            i0.ɵɵtext(133, "realidad.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(134, "p");
            i0.ɵɵtext(135, "Contanos tu idea y te ayudamos a encontrar la mejor forma de producirla.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "a", 58);
            i0.ɵɵlistener("click", function App_Template_a_click_136_listener($event) { return ctx.press($event); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(137, "svg", 59);
            i0.ɵɵtext(138, " Hablar por WhatsApp");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(139, App_Conditional_139_Template, 10, 6, "div", 60);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(140, "footer", 61)(141, "div", 62)(142, "div", 63)(143, "a", 3);
            i0.ɵɵelement(144, "img", 64);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "p");
            i0.ɵɵtext(146, "Ideas que toman forma. Dise\u00F1o, impresi\u00F3n y producci\u00F3n gr\u00E1fica.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(147, "div", 65)(148, "strong");
            i0.ɵɵtext(149, "CONTACTO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(150, "a", 66);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(151, "svg", 67);
            i0.ɵɵtext(152, " hola@phoenixgrafica.com");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(153, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(154, "svg", 67);
            i0.ɵɵtext(155, " Buenos Aires, Argentina");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(156, "div", 65)(157, "strong");
            i0.ɵɵtext(158, "SEGUINOS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(159, "a", 68);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(160, "svg", 10);
            i0.ɵɵtext(161, " Instagram");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(162, "a", 8);
            i0.ɵɵtext(163, "Pedir presupuesto ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(164, "svg", 69);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(165, "div", 70)(166, "small");
            i0.ɵɵtext(167, "\u00A9 2026 Phoenix Grafica.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(168, "a", 71);
            i0.ɵɵtext(169, "Volver arriba \u2191");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_17_0;
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("lucideIcon", ctx.icons.ArrowRight);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("lucideIcon", ctx.menuOpen() ? ctx.icons.X : ctx.icons.Menu);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.menuOpen() ? 17 : -1);
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("lucideIcon", ctx.icons.ArrowRight);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lucideIcon", ctx.icons.ChevronDown);
            i0.ɵɵadvance(23);
            i0.ɵɵrepeater(ctx.services);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.categories);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.visibleProjects());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("distance", -35);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("lucideIcon", ctx.icons.Check);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lucideIcon", ctx.icons.Check);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lucideIcon", ctx.icons.Check);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("lucideIcon", ctx.icons.ArrowRight);
            i0.ɵɵadvance(13);
            i0.ɵɵrepeater(ctx.process);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("lucideIcon", ctx.icons.MessageCircle);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_17_0 = ctx.selectedProject()) ? 139 : -1, tmp_17_0);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("lucideIcon", ctx.icons.Mail);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("lucideIcon", ctx.icons.MapPin);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("lucideIcon", ctx.icons.Instagram);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("lucideIcon", ctx.icons.ArrowRight);
        } }, dependencies: [LucideDynamicIcon, RevealDirective], styles: ["[_nghost-%COMP%]{display:block;color:#111;background:#f5f3ef}*[_ngcontent-%COMP%]{box-sizing:border-box}.site-header[_ngcontent-%COMP%]{height:76px;padding:0 clamp(24px,5vw,78px);display:flex;align-items:center;justify-content:space-between;position:absolute;z-index:20;width:100%;color:white;border-bottom:1px solid #ffffff22}.brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:inherit;text-decoration:none;font-weight:900;font-size:17px;letter-spacing:.06em;line-height:.8}.brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:8px;letter-spacing:.48em;margin-top:7px}.brand-mark[_ngcontent-%COMP%]{width:34px;height:34px;display:grid;place-items:center;font-style:italic;font-size:22px;background:linear-gradient(135deg,#fd0085,#7b00d4 45%,#0077eb);clip-path:polygon(18% 0,100% 0,80% 100%,0 100%)}nav[_ngcontent-%COMP%]{display:flex;gap:32px}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;font-size:13px;font-weight:600}.button[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:10px;color:white;text-decoration:none;font-weight:750;font-size:13px;background:linear-gradient(110deg,#fd0085,#7b00d4 58%,#0077eb);padding:15px 22px;border-radius:3px;transition:transform .2s,box-shadow .2s}.button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 12px 35px #a400c555}.button-sm[_ngcontent-%COMP%]{padding:11px 16px}.menu-button[_ngcontent-%COMP%]{display:none;background:none;border:0;color:white}.mobile-menu[_ngcontent-%COMP%]{display:none}.hero[_ngcontent-%COMP%]{position:relative;min-height:760px;height:100svh;overflow:hidden;background:#07070a;color:white}.hero-photo[_ngcontent-%COMP%], .hero-shade[_ngcontent-%COMP%]{position:absolute;inset:0}.hero-photo[_ngcontent-%COMP%]{background:url('/assets/phoenix-workshop.png') center/cover no-repeat}.hero-shade[_ngcontent-%COMP%]{background:linear-gradient(90deg,#07070a 0%,#07070af5 30%,#07070a60 61%,#07070a20),linear-gradient(0deg,#07070ac0 0%,transparent 35%)}.hero-content[_ngcontent-%COMP%]{position:relative;z-index:2;padding:clamp(150px,22vh,225px) 8vw 80px;width:min(720px,65vw)}.eyebrow[_ngcontent-%COMP%], .kicker[_ngcontent-%COMP%]{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}.eyebrow[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;color:#ddd}.eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:25px;height:2px;background:#fd0085}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(56px,7vw,104px);line-height:.88;letter-spacing:-.065em;margin:27px 0 28px;font-weight:850}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.gradient-text[_ngcontent-%COMP%], em[_ngcontent-%COMP%]{font-style:normal;color:transparent;background:linear-gradient(100deg,#fd0085,#a700c9 45%,#0077eb,#00b8f4);background-clip:text}.hero-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#ccc;max-width:530px;font-size:17px;line-height:1.65}.hero-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:26px;margin-top:35px}.text-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:9px;color:white;font-size:13px;font-weight:700;text-decoration:none;border-bottom:1px solid #ffffff55;padding-bottom:7px}.text-link.dark[_ngcontent-%COMP%]{color:#111;border-color:#1113}.open-state[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-top:45px;color:#a7a7a7;font-size:11px}.open-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:white;text-transform:uppercase;letter-spacing:.12em;font-size:10px}.open-state[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{border-left:1px solid #ffffff33;padding-left:9px}.pulse[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#32df82;box-shadow:0 0 12px #32df82}.hero-index[_ngcontent-%COMP%]{position:absolute;z-index:2;right:6vw;bottom:42px;font:10px monospace;letter-spacing:.2em;color:#aaa}.orb[_ngcontent-%COMP%]{position:absolute;border-radius:50%;filter:blur(3px);z-index:1}.orb-a[_ngcontent-%COMP%]{width:150px;height:150px;right:8%;top:16%;background:radial-gradient(circle at 30% 30%,#00b8f477,#7b00d418 60%,transparent)}.halftone[_ngcontent-%COMP%]{position:absolute;z-index:1;left:48%;bottom:11%;width:120px;height:110px;opacity:.2;background-image:radial-gradient(#fff 1.2px,transparent 1.2px);background-size:10px 10px;transform:rotate(-8deg)}.marquee[_ngcontent-%COMP%]{overflow:hidden;background:linear-gradient(90deg,#fd0085,#7b00d4,#0077eb);color:white;padding:13px 0;font-weight:800;font-size:11px;letter-spacing:.18em}.marquee-track[_ngcontent-%COMP%]{display:flex;width:max-content;animation:_ngcontent-%COMP%_marquee 25s linear infinite}.marquee-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap}@keyframes _ngcontent-%COMP%_marquee{to{transform:translateX(-50%)}}.section[_ngcontent-%COMP%]{padding:110px clamp(24px,7vw,110px)}.section-heading[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .center-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .machine-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(38px,4.5vw,66px);letter-spacing:-.055em;line-height:1;margin:15px 0 0}.section-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:380px;color:#73716f;line-height:1.7;font-size:14px}.kicker[_ngcontent-%COMP%]{color:#7b00d4}.service-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #d8d5d0}.service-card[_ngcontent-%COMP%]{padding:28px 24px 24px 0;border-right:1px solid #d8d5d0;min-height:300px}.service-card[_ngcontent-%COMP%] + .service-card[_ngcontent-%COMP%]{padding-left:24px}.service-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#7b00d4}.service-top[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font:11px monospace;color:#aaa}.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:75px 0 14px}.service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;line-height:1.7;color:#777;min-height:65px}.service-card[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:35px;height:35px;border:1px solid #bbb;display:grid;place-items:center;color:#111;transition:.2s}.service-card[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%]{background:#111;color:white}.projects-section[_ngcontent-%COMP%], .reviews-section[_ngcontent-%COMP%]{background:#0b0b0f;color:white}.light[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#999}.filters[_ngcontent-%COMP%]{display:flex;gap:8px;margin:-24px 0 34px}.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #333;background:transparent;color:#888;padding:8px 15px;font-size:11px;border-radius:50px;cursor:pointer;transition:.2s}.filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], .filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:white;border-color:#fd0085;background:#fd00851c}.projects-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;min-height:350px}.project-card[_ngcontent-%COMP%]{position:relative;aspect-ratio:4/3;overflow:hidden;background:#222}.project-art[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;transition:transform .5s ease;background:linear-gradient(145deg,#17171d,#32303a)}.project-card[_ngcontent-%COMP%]:hover   .project-art[_ngcontent-%COMP%]{transform:scale(1.04)}.art-logo[_ngcontent-%COMP%]{font-weight:900;font-size:clamp(38px,6vw,78px);letter-spacing:-.08em}.art-line[_ngcontent-%COMP%]{position:absolute;width:60%;height:4px;transform:rotate(-26deg);background:linear-gradient(90deg,#fd0085,#7b00d4,#00b8f4)}.project-print[_ngcontent-%COMP%]   .project-art[_ngcontent-%COMP%]{background:repeating-linear-gradient(125deg,#fd0085 0 35px,#7b00d4 35px 70px,#0077eb 70px 105px)}.project-letters[_ngcontent-%COMP%]   .project-art[_ngcontent-%COMP%]{background:radial-gradient(circle,#362554,#09090c 60%)}.project-window[_ngcontent-%COMP%]   .project-art[_ngcontent-%COMP%]{background:linear-gradient(120deg,#00b8f4,#0077eb 45%,#191922 46%)}.project-wayfinding[_ngcontent-%COMP%]   .project-art[_ngcontent-%COMP%]{background:linear-gradient(150deg,#efede7 0 50%,#191919 50%);color:#111}.project-object[_ngcontent-%COMP%]   .project-art[_ngcontent-%COMP%]{background:radial-gradient(circle at 60% 30%,#fd0085,#7b00d4 32%,#101014 65%)}.project-meta[_ngcontent-%COMP%]{position:absolute;inset:auto 0 0;padding:35px 20px 18px;background:linear-gradient(transparent,#000c)}.project-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:#ccc}.project-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:5px 0 0;font-size:18px}.machine-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.25fr 1fr;min-height:680px;background:#ece9e3}.machine-photo[_ngcontent-%COMP%]{margin:70px 0 70px 7vw;background:url('/assets/phoenix-workshop.png') 70% center/cover no-repeat;position:relative;box-shadow:0 30px 70px #1112}.photo-label[_ngcontent-%COMP%]{position:absolute;bottom:16px;left:16px;background:white;padding:8px 10px;font:9px monospace}.machine-copy[_ngcontent-%COMP%]{padding:120px 8vw 80px}.machine-copy[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#6c6965;line-height:1.75;margin:28px 0}.machine-copy[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;margin:25px 0 35px}.machine-copy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin:12px 0;font-size:13px}.machine-copy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   lucide-icon[_ngcontent-%COMP%]{color:#7b00d4}.center-heading[_ngcontent-%COMP%]{text-align:center}.center-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#777}.process-wrap[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:repeat(5,1fr);margin-top:80px}.process-line[_ngcontent-%COMP%]{position:absolute;top:9px;left:10%;right:10%;height:2px;background:#ddd}.process-line-fill[_ngcontent-%COMP%]{display:block;width:100%;height:100%;transform-origin:left;background:linear-gradient(90deg,#fd0085,#7b00d4,#0077eb,#00b8f4)}.process-step[_ngcontent-%COMP%]{text-align:center;opacity:0}.process-dot[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;width:19px;height:19px;margin:0 auto 25px;border:5px solid #f5f3ef;border-radius:50%;background:#7b00d4;box-shadow:0 0 0 1px #7b00d4}.process-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font:11px monospace;color:#7b00d4}.process-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:.14em;font-size:14px;margin:11px 0}.process-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#888}.reviews-section[_ngcontent-%COMP%]{background:#111116}.reviews-inner[_ngcontent-%COMP%]{padding-top:100px;padding-bottom:100px}.stars[_ngcontent-%COMP%]{color:#fd0085;letter-spacing:.1em}.stars[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:#888;font-size:10px;margin-top:8px}.reviews-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.review-card[_ngcontent-%COMP%]{padding:28px;background:#19191f;border:1px solid #282830}.review-card[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:#fd0085;font-size:12px}.review-card[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{line-height:1.75;color:#d0d0d0;min-height:100px;font-size:14px}.review-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:11px}.review-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#fd0085,#7b00d4);font-size:11px}.review-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:11px}.review-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;color:#777;margin-top:4px}.cta-section[_ngcontent-%COMP%]{position:relative;overflow:hidden;text-align:center;padding:120px 24px;background:linear-gradient(120deg,#6d00c7,#006bd5);color:white}.cta-section[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%]{color:#fff}.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(55px,7vw,95px);line-height:.87;letter-spacing:-.06em;margin:20px}.cta-section[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:white;background:none}.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ddd;margin:25px auto 30px;max-width:480px}.button-light[_ngcontent-%COMP%]{background:white;color:#351354}.cta-orb[_ngcontent-%COMP%]{position:absolute;width:450px;height:450px;border-radius:50%;background:#fd008555;filter:blur(80px);left:-150px;top:-220px}.footer[_ngcontent-%COMP%]{background:#08080b;color:#aaa;padding:65px 7vw 28px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;font-size:11px}.footer[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]{color:white}.footer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:first-child){display:flex;flex-direction:column;gap:12px}.footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:white;font-size:9px;letter-spacing:.15em}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:7px;color:#aaa;text-decoration:none}.footer[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{grid-column:1/-1;border-top:1px solid #222;padding-top:20px}.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:45px}\n@media(max-width:900px){.site-header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%], .site-header[_ngcontent-%COMP%] > .button[_ngcontent-%COMP%]{display:none}.menu-button[_ngcontent-%COMP%]{display:block}.mobile-menu[_ngcontent-%COMP%]{display:flex;position:absolute;top:76px;left:0;right:0;background:#0b0b0ff5;flex-direction:column;padding:25px 7vw;gap:20px}.hero-content[_ngcontent-%COMP%]{width:85vw}.section-heading[_ngcontent-%COMP%]{align-items:flex-start;gap:30px}.service-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.projects-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.machine-section[_ngcontent-%COMP%]{grid-template-columns:1fr}.machine-photo[_ngcontent-%COMP%]{min-height:470px;margin:60px 7vw 0}.machine-copy[_ngcontent-%COMP%]{padding-top:70px}.footer[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.site-header[_ngcontent-%COMP%]{height:66px;padding:0 20px}.hero[_ngcontent-%COMP%]{min-height:700px}.hero-photo[_ngcontent-%COMP%]{background-position:65% center}.hero-shade[_ngcontent-%COMP%]{background:linear-gradient(90deg,#07070af7,#07070ac5 70%,#07070a50),linear-gradient(0deg,#07070ae8,transparent 50%)}.hero-content[_ngcontent-%COMP%]{padding:145px 22px 80px;width:100%}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:55px}.hero-content[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:14px}.hero-actions[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.open-state[_ngcontent-%COMP%]{margin-top:32px}.orb-a[_ngcontent-%COMP%]{display:none}.section[_ngcontent-%COMP%]{padding:80px 22px}.section-heading[_ngcontent-%COMP%]{display:block}.section-heading[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{width:auto;margin-top:25px}.service-grid[_ngcontent-%COMP%], .projects-grid[_ngcontent-%COMP%], .reviews-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.service-card[_ngcontent-%COMP%], .service-card[_ngcontent-%COMP%] + .service-card[_ngcontent-%COMP%]{padding:25px 10px;min-height:240px;border-right:0;border-bottom:1px solid #d8d5d0}.service-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:45px}.projects-grid[_ngcontent-%COMP%]{min-height:280px}.filters[_ngcontent-%COMP%]{overflow:auto;margin-top:-20px}.machine-photo[_ngcontent-%COMP%]{margin:45px 20px 0;min-height:340px}.machine-copy[_ngcontent-%COMP%]{padding:60px 22px 80px}.process-wrap[_ngcontent-%COMP%]{display:block;margin:60px 0 0 18px}.process-line[_ngcontent-%COMP%]{top:0;bottom:0;left:8px;right:auto;width:2px;height:auto}.process-line-fill[_ngcontent-%COMP%]{height:100%;transform-origin:top}.process-step[_ngcontent-%COMP%]{text-align:left;min-height:120px;padding-left:44px;position:relative}.process-dot[_ngcontent-%COMP%]{position:absolute;left:0;top:0;margin:0}.reviews-inner[_ngcontent-%COMP%]{padding:75px 22px}.review-card[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{min-height:0}.footer[_ngcontent-%COMP%]{grid-template-columns:1fr;padding:55px 22px 25px}.footer[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{grid-column:auto}.cta-section[_ngcontent-%COMP%]{padding:95px 20px}.marquee[_ngcontent-%COMP%]{font-size:9px}}\n@media(prefers-reduced-motion:reduce){html[_ngcontent-%COMP%]{scroll-behavior:auto}.marquee-track[_ngcontent-%COMP%]{animation:none}.button[_ngcontent-%COMP%], .project-art[_ngcontent-%COMP%]{transition:none}}\nsvg[_ngcontent-%COMP%]{display:inline-block;flex:0 0 auto}\n.machine-copy[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#7b00d4}\n.brand[_ngcontent-%COMP%]{min-width:118px}\n.brand-logo[_ngcontent-%COMP%]{display:block;width:118px;height:46px;object-fit:contain;object-position:left center;filter:drop-shadow(0 10px 18px #0008)}\n.hero-logo[_ngcontent-%COMP%]{display:block;width:min(220px,58vw);height:96px;object-fit:contain;object-position:left center;margin:0 0 22px;filter:drop-shadow(0 18px 26px #000b)}\n.footer-logo[_ngcontent-%COMP%]{filter:none;background:white;border-radius:3px;padding:4px}\n.project-photo[_ngcontent-%COMP%]{background:#111}\n.project-image[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .55s ease,filter .55s ease;filter:saturate(1.05) contrast(1.03)}\n.project-card[_ngcontent-%COMP%]:hover   .project-image[_ngcontent-%COMP%]{transform:scale(1.055)}\n.project-card[_ngcontent-%COMP%]::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,#0000 40%,#000d);pointer-events:none}\n.project-meta[_ngcontent-%COMP%]{z-index:1}\n@media(max-width:600px){.brand[_ngcontent-%COMP%]{min-width:96px}.brand-logo[_ngcontent-%COMP%]{width:96px;height:38px}.hero-logo[_ngcontent-%COMP%]{height:78px;margin-bottom:18px}.project-card[_ngcontent-%COMP%]{aspect-ratio:1/1}}\n\n\n.project-open[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;background:none;color:white;text-align:left;cursor:zoom-in}\n.project-open[_ngcontent-%COMP%]:focus-visible{outline:3px solid #00b8f4;outline-offset:-3px}\n.project-meta[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:#ccc}\n.project-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:5px;font-size:18px}\n.project-zoom[_ngcontent-%COMP%]{position:absolute;z-index:2;top:16px;right:16px;display:flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #ffffff44;border-radius:3px;background:#09090bbf;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:0;transform:translateY(-6px);transition:.25s}\n.project-card[_ngcontent-%COMP%]:hover   .project-zoom[_ngcontent-%COMP%], .project-open[_ngcontent-%COMP%]:focus-visible   .project-zoom[_ngcontent-%COMP%]{opacity:1;transform:none}\n.lightbox[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:70px clamp(18px,5vw,70px) 28px;background:#050507ed;backdrop-filter:blur(12px);animation:_ngcontent-%COMP%_lightbox-in .2s ease}\n.lightbox[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:min(1200px,100%);max-height:100%;margin:0}\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:calc(100vh - 145px);object-fit:contain;box-shadow:0 30px 90px #000}\n.lightbox[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:25px;padding-top:15px;color:white}\n.lightbox[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#999;font-size:10px;letter-spacing:.14em;text-transform:uppercase}\n.lightbox[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:14px}\n.lightbox-close[_ngcontent-%COMP%]{position:absolute;top:22px;right:clamp(18px,4vw,55px);display:grid;place-items:center;width:42px;height:42px;border:1px solid #ffffff33;border-radius:50%;background:#111b;color:white;cursor:pointer;transition:.2s}\n.lightbox-close[_ngcontent-%COMP%]:hover{background:white;color:#111}\n@keyframes _ngcontent-%COMP%_lightbox-in{from{opacity:0}}\n\n\n.footer[_ngcontent-%COMP%]{display:block;padding:72px 7vw 28px}\n.footer-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(260px,2fr) 1fr 1fr;gap:clamp(40px,7vw,110px);padding-bottom:58px}\n.footer-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding-top:8px}\n.footer-main[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:290px;margin:18px 0 0;color:#777;line-height:1.65}\n.footer-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{transition:color .2s}\n.footer-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:white}\n.footer-bottom[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #222;padding-top:22px}\n.footer-bottom[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#666}\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#777;text-decoration:none;transition:color .2s}\n\n@media(max-width:900px){.footer-main[_ngcontent-%COMP%]{grid-template-columns:1.5fr 1fr}.footer-column[_ngcontent-%COMP%]:last-child{grid-column:2}}\n@media(max-width:600px){.project-zoom[_ngcontent-%COMP%]{opacity:1;transform:none}.lightbox[_ngcontent-%COMP%]{padding:62px 14px 20px}.lightbox[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{flex-direction:column;gap:6px}.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:calc(100vh - 150px)}.footer[_ngcontent-%COMP%]{padding:52px 22px 24px}.footer-main[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:34px;padding-bottom:40px}.footer-column[_ngcontent-%COMP%]:last-child{grid-column:auto}.footer-bottom[_ngcontent-%COMP%]{align-items:flex-start;gap:15px}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [LucideDynamicIcon, RevealDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"site-header\">\n  <a class=\"brand\" href=\"#inicio\">\n    <img class=\"brand-logo\" src=\"/assets/logos/lgo de color.svg\" alt=\"Phoenix Grafica\" />\n  </a>\n  <nav>\n    <a href=\"#servicios\">Servicios</a>\n    <a href=\"#trabajos\">Trabajos</a>\n    <a href=\"#proceso\">Proceso</a>\n    <a href=\"#contacto\">Contacto</a>\n  </nav>\n  <a class=\"button button-sm\" href=\"#contacto\" (click)=\"press($event)\">Pedir presupuesto <svg [lucideIcon]=\"icons.ArrowRight\" size=\"16\"></svg></a>\n  <button class=\"menu-button\" type=\"button\" aria-label=\"Abrir menu\" (click)=\"menuOpen.set(!menuOpen())\"><svg [lucideIcon]=\"menuOpen() ? icons.X : icons.Menu\"></svg></button>\n  @if (menuOpen()) {\n    <div class=\"mobile-menu\">\n      <a href=\"#servicios\" (click)=\"menuOpen.set(false)\">Servicios</a>\n      <a href=\"#trabajos\" (click)=\"menuOpen.set(false)\">Trabajos</a>\n      <a href=\"#proceso\" (click)=\"menuOpen.set(false)\">Proceso</a>\n      <a href=\"#contacto\" (click)=\"menuOpen.set(false)\">Contacto</a>\n    </div>\n  }\n</header>\n\n<main>\n  <section #hero id=\"inicio\" class=\"hero\">\n    <div class=\"hero-photo\"></div>\n    <div class=\"hero-shade\"></div>\n    <div class=\"orb orb-a\" data-float></div>\n    <div class=\"halftone\" data-float></div>\n    <div class=\"hero-content\">\n      <img data-hero class=\"hero-logo\" src=\"/assets/logos/lgo de color.svg\" alt=\"Phoenix Grafica\" />\n      <div data-hero class=\"eyebrow\"><span></span> Diseno - impresion - produccion</div>\n      <h1><span data-hero>Hacemos realidad</span><span data-hero class=\"gradient-text\">tus ideas.</span></h1>\n      <p data-hero>Disenamos y producimos piezas graficas que hacen que tu marca se vea, se recuerde y crezca.</p>\n      <div data-hero class=\"hero-actions\">\n        <a class=\"button\" href=\"#contacto\" (click)=\"press($event)\">Pedir presupuesto <svg [lucideIcon]=\"icons.ArrowRight\" size=\"18\"></svg></a>\n        <a class=\"text-link\" href=\"#trabajos\">Ver trabajos <svg [lucideIcon]=\"icons.ChevronDown\" size=\"17\"></svg></a>\n      </div>\n    </div>\n    <div data-hero class=\"hero-index\">PHX - 01</div>\n  </section>\n\n  <div class=\"marquee\">\n    <div class=\"marquee-track\">\n      <span>CARTELERIA - IMPRESION UV - CORTE LASER - PLOTEOS - VINILOS - DISENO - PRODUCCION - </span>\n      <span aria-hidden=\"true\">CARTELERIA - IMPRESION UV - CORTE LASER - PLOTEOS - VINILOS - DISENO - PRODUCCION - </span>\n    </div>\n  </div>\n\n  <section id=\"servicios\" class=\"section services-section\">\n    <div class=\"section-heading\" phoenixReveal>\n      <div><span class=\"kicker\">LO QUE HACEMOS</span><h2>Todo lo que tu marca<br>necesita para <em>destacar.</em></h2></div>\n      <p>De la primera idea a la pieza terminada. Un solo equipo para resolver todo el proceso.</p>\n    </div>\n    <div class=\"service-grid\" phoenixReveal children=\".service-card\">\n      @for (service of services; track service.number) {\n        <article class=\"service-card\">\n          <div class=\"service-top\"><span>{{ service.number }}</span><svg [lucideIcon]=\"service.icon\" size=\"27\"></svg></div>\n          <h3>{{ service.title }}</h3>\n          <p>{{ service.text }}</p>\n          <a href=\"#contacto\" aria-label=\"Consultar por servicio\"><svg [lucideIcon]=\"icons.ArrowRight\" size=\"19\"></svg></a>\n        </article>\n      }\n    </div>\n  </section>\n\n  <section id=\"trabajos\" class=\"section projects-section\">\n    <div class=\"section-heading light\" phoenixReveal>\n      <div><span class=\"kicker\">TRABAJOS RECIENTES</span><h2>Trabajos reales listos para mostrar.</h2></div>\n      <p>Una galeria con las fotos cargadas para que se vean carteles, lonas, ploteos y vidrieras.</p>\n    </div>\n    <div class=\"filters\" aria-label=\"Filtrar trabajos\">\n      @for (item of categories; track item) {\n        <button type=\"button\" [class.active]=\"category() === item\" (click)=\"selectCategory(item)\">{{ item }}</button>\n      }\n    </div>\n    <div class=\"projects-grid\" phoenixReveal children=\".project-card\">\n      @for (project of visibleProjects(); track project.image) {\n        <article [class]=\"'project-card ' + project.className\">\n          <button class=\"project-open\" type=\"button\" (click)=\"openProject(project)\" [attr.aria-label]=\"'Ampliar ' + project.title\">\n            <img class=\"project-image\" [src]=\"project.image\" [alt]=\"project.title\" loading=\"lazy\" />\n            <span class=\"project-zoom\"><svg [lucideIcon]=\"icons.ZoomIn\" size=\"18\"></svg> Ampliar</span>\n            <span class=\"project-meta\"><small>{{ project.label }}</small><strong>{{ project.title }}</strong></span>\n          </button>\n        </article>\n      }\n    </div>\n  </section>\n\n  <section class=\"machine-section\">\n    <div class=\"machine-photo\" phoenixReveal axis=\"x\" [distance]=\"-35\"><span class=\"photo-label\">TECNOLOGIA / 01</span></div>\n    <div class=\"machine-copy\" phoenixReveal axis=\"x\">\n      <span class=\"kicker\">NUESTRA MAQUINARIA</span>\n      <h2>Precision que se<br><em>puede ver.</em></h2>\n      <p>Trabajamos con tecnologia de impresion de gran formato para lograr colores intensos, detalles nitidos y resultados consistentes.</p>\n      <ul>\n        <li><svg [lucideIcon]=\"icons.Check\" size=\"17\"></svg> Impresion UV de alta definicion</li>\n        <li><svg [lucideIcon]=\"icons.Check\" size=\"17\"></svg> Amplia variedad de materiales</li>\n        <li><svg [lucideIcon]=\"icons.Check\" size=\"17\"></svg> Produccion interna y controlada</li>\n      </ul>\n      <a class=\"text-link dark\" href=\"#contacto\">Conoce nuestras capacidades <svg [lucideIcon]=\"icons.ArrowRight\" size=\"18\"></svg></a>\n    </div>\n  </section>\n\n  <section #processSection id=\"proceso\" class=\"section process-section\">\n    <div class=\"center-heading\" phoenixReveal>\n      <span class=\"kicker\">COMO TRABAJAMOS</span>\n      <h2>De la idea a la realidad.</h2>\n      <p>Un proceso claro, agil y acompanado de principio a fin.</p>\n    </div>\n    <div class=\"process-wrap\">\n      <div class=\"process-line\"><span class=\"process-line-fill\"></span></div>\n      @for (step of process; track step[0]) {\n        <article class=\"process-step\"><span class=\"process-dot\"></span><strong>{{ step[0] }}</strong><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></article>\n      }\n    </div>\n  </section>\n\n  <section id=\"contacto\" class=\"cta-section\">\n    <div class=\"cta-orb\"></div>\n    <div phoenixReveal>\n      <span class=\"kicker\">TENES UN PROYECTO?</span>\n      <h2>Hagamoslo<br><em>realidad.</em></h2>\n      <p>Contanos tu idea y te ayudamos a encontrar la mejor forma de producirla.</p>\n      <a class=\"button button-light\" href=\"https://wa.me/5490000000000\" target=\"_blank\" rel=\"noreferrer\" (click)=\"press($event)\"><svg [lucideIcon]=\"icons.MessageCircle\" size=\"19\"></svg> Hablar por WhatsApp</a>\n    </div>\n  </section>\n</main>\n\n@if (selectedProject(); as project) {\n  <div class=\"lightbox\" role=\"dialog\" aria-modal=\"true\" [attr.aria-label]=\"project.title\" (click)=\"closeFromBackdrop($event)\">\n    <button class=\"lightbox-close\" type=\"button\" aria-label=\"Cerrar imagen\" (click)=\"closeProject()\"><svg [lucideIcon]=\"icons.X\" size=\"24\"></svg></button>\n    <figure>\n      <img [src]=\"project.image\" [alt]=\"project.title\" />\n      <figcaption><span>{{ project.label }}</span><strong>{{ project.title }}</strong></figcaption>\n    </figure>\n  </div>\n}\n\n<footer class=\"footer\">\n  <div class=\"footer-main\">\n    <div class=\"footer-brand\">\n      <a class=\"brand\" href=\"#inicio\"><img class=\"brand-logo footer-logo\" src=\"/assets/logos/lgo negro.svg\" alt=\"Phoenix Grafica\" /></a>\n      <p>Ideas que toman forma. Dise\u00F1o, impresi\u00F3n y producci\u00F3n gr\u00E1fica.</p>\n    </div>\n    <div class=\"footer-column\"><strong>CONTACTO</strong><a href=\"mailto:hola@phoenixgrafica.com\"><svg [lucideIcon]=\"icons.Mail\" size=\"15\"></svg> hola@phoenixgrafica.com</a><span><svg [lucideIcon]=\"icons.MapPin\" size=\"15\"></svg> Buenos Aires, Argentina</span></div>\n    <div class=\"footer-column\"><strong>SEGUINOS</strong><a href=\"#\"><svg [lucideIcon]=\"icons.Instagram\" size=\"16\"></svg> Instagram</a><a href=\"#contacto\">Pedir presupuesto <svg [lucideIcon]=\"icons.ArrowRight\" size=\"14\"></svg></a></div>\n  </div>\n  <div class=\"footer-bottom\"><small>\u00A9 2026 Phoenix Grafica.</small><a href=\"#inicio\">Volver arriba \u2191</a></div>\n</footer>\n", styles: [":host{display:block;color:#111;background:#f5f3ef}*{box-sizing:border-box}.site-header{height:76px;padding:0 clamp(24px,5vw,78px);display:flex;align-items:center;justify-content:space-between;position:absolute;z-index:20;width:100%;color:white;border-bottom:1px solid #ffffff22}.brand{display:flex;align-items:center;gap:10px;color:inherit;text-decoration:none;font-weight:900;font-size:17px;letter-spacing:.06em;line-height:.8}.brand small{display:block;font-size:8px;letter-spacing:.48em;margin-top:7px}.brand-mark{width:34px;height:34px;display:grid;place-items:center;font-style:italic;font-size:22px;background:linear-gradient(135deg,#fd0085,#7b00d4 45%,#0077eb);clip-path:polygon(18% 0,100% 0,80% 100%,0 100%)}nav{display:flex;gap:32px}nav a,.mobile-menu a{color:inherit;text-decoration:none;font-size:13px;font-weight:600}.button{display:inline-flex;align-items:center;justify-content:center;gap:10px;color:white;text-decoration:none;font-weight:750;font-size:13px;background:linear-gradient(110deg,#fd0085,#7b00d4 58%,#0077eb);padding:15px 22px;border-radius:3px;transition:transform .2s,box-shadow .2s}.button:hover{transform:translateY(-2px);box-shadow:0 12px 35px #a400c555}.button-sm{padding:11px 16px}.menu-button{display:none;background:none;border:0;color:white}.mobile-menu{display:none}.hero{position:relative;min-height:760px;height:100svh;overflow:hidden;background:#07070a;color:white}.hero-photo,.hero-shade{position:absolute;inset:0}.hero-photo{background:url('/assets/phoenix-workshop.png') center/cover no-repeat}.hero-shade{background:linear-gradient(90deg,#07070a 0%,#07070af5 30%,#07070a60 61%,#07070a20),linear-gradient(0deg,#07070ac0 0%,transparent 35%)}.hero-content{position:relative;z-index:2;padding:clamp(150px,22vh,225px) 8vw 80px;width:min(720px,65vw)}.eyebrow,.kicker{font-size:11px;font-weight:800;letter-spacing:.2em;text-transform:uppercase}.eyebrow{display:flex;align-items:center;gap:12px;color:#ddd}.eyebrow span{width:25px;height:2px;background:#fd0085}.hero h1{font-size:clamp(56px,7vw,104px);line-height:.88;letter-spacing:-.065em;margin:27px 0 28px;font-weight:850}.hero h1 span{display:block}.gradient-text,em{font-style:normal;color:transparent;background:linear-gradient(100deg,#fd0085,#a700c9 45%,#0077eb,#00b8f4);background-clip:text}.hero-content>p{color:#ccc;max-width:530px;font-size:17px;line-height:1.65}.hero-actions{display:flex;align-items:center;gap:26px;margin-top:35px}.text-link{display:inline-flex;align-items:center;gap:9px;color:white;font-size:13px;font-weight:700;text-decoration:none;border-bottom:1px solid #ffffff55;padding-bottom:7px}.text-link.dark{color:#111;border-color:#1113}.open-state{display:flex;align-items:center;gap:8px;margin-top:45px;color:#a7a7a7;font-size:11px}.open-state strong{color:white;text-transform:uppercase;letter-spacing:.12em;font-size:10px}.open-state>span:last-child{border-left:1px solid #ffffff33;padding-left:9px}.pulse{width:7px;height:7px;border-radius:50%;background:#32df82;box-shadow:0 0 12px #32df82}.hero-index{position:absolute;z-index:2;right:6vw;bottom:42px;font:10px monospace;letter-spacing:.2em;color:#aaa}.orb{position:absolute;border-radius:50%;filter:blur(3px);z-index:1}.orb-a{width:150px;height:150px;right:8%;top:16%;background:radial-gradient(circle at 30% 30%,#00b8f477,#7b00d418 60%,transparent)}.halftone{position:absolute;z-index:1;left:48%;bottom:11%;width:120px;height:110px;opacity:.2;background-image:radial-gradient(#fff 1.2px,transparent 1.2px);background-size:10px 10px;transform:rotate(-8deg)}.marquee{overflow:hidden;background:linear-gradient(90deg,#fd0085,#7b00d4,#0077eb);color:white;padding:13px 0;font-weight:800;font-size:11px;letter-spacing:.18em}.marquee-track{display:flex;width:max-content;animation:marquee 25s linear infinite}.marquee-track span{white-space:nowrap}@keyframes marquee{to{transform:translateX(-50%)}}.section{padding:110px clamp(24px,7vw,110px)}.section-heading{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:60px}.section-heading h2,.center-heading h2,.machine-copy h2{font-size:clamp(38px,4.5vw,66px);letter-spacing:-.055em;line-height:1;margin:15px 0 0}.section-heading>p{width:380px;color:#73716f;line-height:1.7;font-size:14px}.kicker{color:#7b00d4}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #d8d5d0}.service-card{padding:28px 24px 24px 0;border-right:1px solid #d8d5d0;min-height:300px}.service-card+.service-card{padding-left:24px}.service-top{display:flex;justify-content:space-between;color:#7b00d4}.service-top>span{font:11px monospace;color:#aaa}.service-card h3{font-size:20px;margin:75px 0 14px}.service-card p{font-size:13px;line-height:1.7;color:#777;min-height:65px}.service-card>a{width:35px;height:35px;border:1px solid #bbb;display:grid;place-items:center;color:#111;transition:.2s}.service-card:hover>a{background:#111;color:white}.projects-section,.reviews-section{background:#0b0b0f;color:white}.light>p{color:#999}.filters{display:flex;gap:8px;margin:-24px 0 34px}.filters button{border:1px solid #333;background:transparent;color:#888;padding:8px 15px;font-size:11px;border-radius:50px;cursor:pointer;transition:.2s}.filters button.active,.filters button:hover{color:white;border-color:#fd0085;background:#fd00851c}.projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;min-height:350px}.project-card{position:relative;aspect-ratio:4/3;overflow:hidden;background:#222}.project-art{position:absolute;inset:0;display:grid;place-items:center;transition:transform .5s ease;background:linear-gradient(145deg,#17171d,#32303a)}.project-card:hover .project-art{transform:scale(1.04)}.art-logo{font-weight:900;font-size:clamp(38px,6vw,78px);letter-spacing:-.08em}.art-line{position:absolute;width:60%;height:4px;transform:rotate(-26deg);background:linear-gradient(90deg,#fd0085,#7b00d4,#00b8f4)}.project-print .project-art{background:repeating-linear-gradient(125deg,#fd0085 0 35px,#7b00d4 35px 70px,#0077eb 70px 105px)}.project-letters .project-art{background:radial-gradient(circle,#362554,#09090c 60%)}.project-window .project-art{background:linear-gradient(120deg,#00b8f4,#0077eb 45%,#191922 46%)}.project-wayfinding .project-art{background:linear-gradient(150deg,#efede7 0 50%,#191919 50%);color:#111}.project-object .project-art{background:radial-gradient(circle at 60% 30%,#fd0085,#7b00d4 32%,#101014 65%)}.project-meta{position:absolute;inset:auto 0 0;padding:35px 20px 18px;background:linear-gradient(transparent,#000c)}.project-meta span{font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:#ccc}.project-meta h3{margin:5px 0 0;font-size:18px}.machine-section{display:grid;grid-template-columns:1.25fr 1fr;min-height:680px;background:#ece9e3}.machine-photo{margin:70px 0 70px 7vw;background:url('/assets/phoenix-workshop.png') 70% center/cover no-repeat;position:relative;box-shadow:0 30px 70px #1112}.photo-label{position:absolute;bottom:16px;left:16px;background:white;padding:8px 10px;font:9px monospace}.machine-copy{padding:120px 8vw 80px}.machine-copy>p{color:#6c6965;line-height:1.75;margin:28px 0}.machine-copy ul{padding:0;list-style:none;margin:25px 0 35px}.machine-copy li{display:flex;align-items:center;gap:10px;margin:12px 0;font-size:13px}.machine-copy li lucide-icon{color:#7b00d4}.center-heading{text-align:center}.center-heading>p{color:#777}.process-wrap{position:relative;display:grid;grid-template-columns:repeat(5,1fr);margin-top:80px}.process-line{position:absolute;top:9px;left:10%;right:10%;height:2px;background:#ddd}.process-line-fill{display:block;width:100%;height:100%;transform-origin:left;background:linear-gradient(90deg,#fd0085,#7b00d4,#0077eb,#00b8f4)}.process-step{text-align:center;opacity:0}.process-dot{position:relative;z-index:1;display:block;width:19px;height:19px;margin:0 auto 25px;border:5px solid #f5f3ef;border-radius:50%;background:#7b00d4;box-shadow:0 0 0 1px #7b00d4}.process-step strong{font:11px monospace;color:#7b00d4}.process-step h3{text-transform:uppercase;letter-spacing:.14em;font-size:14px;margin:11px 0}.process-step p{font-size:12px;color:#888}.reviews-section{background:#111116}.reviews-inner{padding-top:100px;padding-bottom:100px}.stars{color:#fd0085;letter-spacing:.1em}.stars small{display:block;color:#888;font-size:10px;margin-top:8px}.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.review-card{padding:28px;background:#19191f;border:1px solid #282830}.review-card>div{color:#fd0085;font-size:12px}.review-card>p{line-height:1.75;color:#d0d0d0;min-height:100px;font-size:14px}.review-card footer{display:flex;align-items:center;gap:11px}.review-card footer>span{width:35px;height:35px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#fd0085,#7b00d4);font-size:11px}.review-card strong{font-size:11px}.review-card small{display:block;color:#777;margin-top:4px}.cta-section{position:relative;overflow:hidden;text-align:center;padding:120px 24px;background:linear-gradient(120deg,#6d00c7,#006bd5);color:white}.cta-section .kicker{color:#fff}.cta-section h2{font-size:clamp(55px,7vw,95px);line-height:.87;letter-spacing:-.06em;margin:20px}.cta-section em{color:white;background:none}.cta-section p{color:#ddd;margin:25px auto 30px;max-width:480px}.button-light{background:white;color:#351354}.cta-orb{position:absolute;width:450px;height:450px;border-radius:50%;background:#fd008555;filter:blur(80px);left:-150px;top:-220px}.footer{background:#08080b;color:#aaa;padding:65px 7vw 28px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;font-size:11px}.footer .brand{color:white}.footer>div:not(:first-child){display:flex;flex-direction:column;gap:12px}.footer strong{color:white;font-size:9px;letter-spacing:.15em}.footer a,.footer span{display:flex;align-items:center;gap:7px;color:#aaa;text-decoration:none}.footer>small{grid-column:1/-1;border-top:1px solid #222;padding-top:20px}.footer-brand p{margin-left:45px}\n@media(max-width:900px){.site-header nav,.site-header>.button{display:none}.menu-button{display:block}.mobile-menu{display:flex;position:absolute;top:76px;left:0;right:0;background:#0b0b0ff5;flex-direction:column;padding:25px 7vw;gap:20px}.hero-content{width:85vw}.section-heading{align-items:flex-start;gap:30px}.service-grid{grid-template-columns:repeat(2,1fr)}.projects-grid{grid-template-columns:repeat(2,1fr)}.machine-section{grid-template-columns:1fr}.machine-photo{min-height:470px;margin:60px 7vw 0}.machine-copy{padding-top:70px}.footer{grid-template-columns:1fr 1fr}}\n@media(max-width:600px){.site-header{height:66px;padding:0 20px}.hero{min-height:700px}.hero-photo{background-position:65% center}.hero-shade{background:linear-gradient(90deg,#07070af7,#07070ac5 70%,#07070a50),linear-gradient(0deg,#07070ae8,transparent 50%)}.hero-content{padding:145px 22px 80px;width:100%}.hero h1{font-size:55px}.hero-content>p{font-size:14px}.hero-actions{align-items:flex-start;flex-direction:column}.open-state{margin-top:32px}.orb-a{display:none}.section{padding:80px 22px}.section-heading{display:block}.section-heading>p{width:auto;margin-top:25px}.service-grid,.projects-grid,.reviews-grid{grid-template-columns:1fr}.service-card,.service-card+.service-card{padding:25px 10px;min-height:240px;border-right:0;border-bottom:1px solid #d8d5d0}.service-card h3{margin-top:45px}.projects-grid{min-height:280px}.filters{overflow:auto;margin-top:-20px}.machine-photo{margin:45px 20px 0;min-height:340px}.machine-copy{padding:60px 22px 80px}.process-wrap{display:block;margin:60px 0 0 18px}.process-line{top:0;bottom:0;left:8px;right:auto;width:2px;height:auto}.process-line-fill{height:100%;transform-origin:top}.process-step{text-align:left;min-height:120px;padding-left:44px;position:relative}.process-dot{position:absolute;left:0;top:0;margin:0}.reviews-inner{padding:75px 22px}.review-card>p{min-height:0}.footer{grid-template-columns:1fr;padding:55px 22px 25px}.footer>small{grid-column:auto}.cta-section{padding:95px 20px}.marquee{font-size:9px}}\n@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.marquee-track{animation:none}.button,.project-art{transition:none}}\nsvg{display:inline-block;flex:0 0 auto}\n.machine-copy li svg{color:#7b00d4}\n.brand{min-width:118px}\n.brand-logo{display:block;width:118px;height:46px;object-fit:contain;object-position:left center;filter:drop-shadow(0 10px 18px #0008)}\n.hero-logo{display:block;width:min(220px,58vw);height:96px;object-fit:contain;object-position:left center;margin:0 0 22px;filter:drop-shadow(0 18px 26px #000b)}\n.footer-logo{filter:none;background:white;border-radius:3px;padding:4px}\n.project-photo{background:#111}\n.project-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .55s ease,filter .55s ease;filter:saturate(1.05) contrast(1.03)}\n.project-card:hover .project-image{transform:scale(1.055)}\n.project-card::after{content:\"\";position:absolute;inset:0;background:linear-gradient(180deg,#0000 40%,#000d);pointer-events:none}\n.project-meta{z-index:1}\n@media(max-width:600px){.brand{min-width:96px}.brand-logo{width:96px;height:38px}.hero-logo{height:78px;margin-bottom:18px}.project-card{aspect-ratio:1/1}}\n\n/* Galeria ampliable */\n.project-open{position:absolute;inset:0;width:100%;height:100%;padding:0;border:0;background:none;color:white;text-align:left;cursor:zoom-in}\n.project-open:focus-visible{outline:3px solid #00b8f4;outline-offset:-3px}\n.project-meta small{display:block;font-size:9px;text-transform:uppercase;letter-spacing:.14em;color:#ccc}\n.project-meta strong{display:block;margin-top:5px;font-size:18px}\n.project-zoom{position:absolute;z-index:2;top:16px;right:16px;display:flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid #ffffff44;border-radius:3px;background:#09090bbf;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:0;transform:translateY(-6px);transition:.25s}\n.project-card:hover .project-zoom,.project-open:focus-visible .project-zoom{opacity:1;transform:none}\n.lightbox{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:70px clamp(18px,5vw,70px) 28px;background:#050507ed;backdrop-filter:blur(12px);animation:lightbox-in .2s ease}\n.lightbox figure{display:flex;flex-direction:column;max-width:min(1200px,100%);max-height:100%;margin:0}\n.lightbox img{display:block;max-width:100%;max-height:calc(100vh - 145px);object-fit:contain;box-shadow:0 30px 90px #000}\n.lightbox figcaption{display:flex;justify-content:space-between;gap:25px;padding-top:15px;color:white}\n.lightbox figcaption span{color:#999;font-size:10px;letter-spacing:.14em;text-transform:uppercase}\n.lightbox figcaption strong{font-size:14px}\n.lightbox-close{position:absolute;top:22px;right:clamp(18px,4vw,55px);display:grid;place-items:center;width:42px;height:42px;border:1px solid #ffffff33;border-radius:50%;background:#111b;color:white;cursor:pointer;transition:.2s}\n.lightbox-close:hover{background:white;color:#111}\n@keyframes lightbox-in{from{opacity:0}}\n\n/* Footer */\n.footer{display:block;padding:72px 7vw 28px}\n.footer-main{display:grid;grid-template-columns:minmax(260px,2fr) 1fr 1fr;gap:clamp(40px,7vw,110px);padding-bottom:58px}\n.footer-column{display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding-top:8px}\n.footer-main .footer-brand p{max-width:290px;margin:18px 0 0;color:#777;line-height:1.65}\n.footer-main a{transition:color .2s}\n.footer-main a:hover,.footer-bottom a:hover{color:white}\n.footer-bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #222;padding-top:22px}\n.footer-bottom small{color:#666}\n.footer-bottom a{color:#777;text-decoration:none;transition:color .2s}\n\n@media(max-width:900px){.footer-main{grid-template-columns:1.5fr 1fr}.footer-column:last-child{grid-column:2}}\n@media(max-width:600px){.project-zoom{opacity:1;transform:none}.lightbox{padding:62px 14px 20px}.lightbox figcaption{flex-direction:column;gap:6px}.lightbox img{max-height:calc(100vh - 150px)}.footer{padding:52px 22px 24px}.footer-main{grid-template-columns:1fr;gap:34px;padding-bottom:40px}.footer-column:last-child{grid-column:auto}.footer-bottom{align-items:flex-start;gap:15px}}\n"] }]
    }], null, { hero: [{
            type: ViewChild,
            args: ['hero']
        }], processSection: [{
            type: ViewChild,
            args: ['processSection']
        }], closeProjectWithEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 }); })();
