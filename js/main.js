import 'overlayscrollbars/overlayscrollbars.css';
import {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
} from 'overlayscrollbars';

const osInstance = OverlayScrollbars(document.querySelector('#best-sellers'), {
    overflow: {
        x: 'scroll',
        y: 'hidden'
    },
    scrollbars: {
        theme: 'os-theme-dark',
        visibility: 'auto',
        autoHide: 'leave',
        autoHideDelay: 1300,
        autoHideSuspend: false,
        dragScroll: true,
        pointers: ['mouse', 'touch', 'pen'],
    },
});

OverlayScrollbars.plugin([SizeObserverPlugin, ScrollbarsHidingPlugin]);

const { viewport } = osInstance.elements();

viewport.addEventListener('wheel', (event) => {
    viewport.scrollBy({ left: event.deltaY, behavior: 'auto' });
}, { passive: false });