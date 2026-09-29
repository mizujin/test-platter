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

const debounce = (callback, delay = 150) => {
	let timeout;

	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

/* Section Show more behavior */
window.addEventListener('DOMContentLoaded', () => {
	const showMoreButton = document.querySelector('#show-more-button');
	const productCards = document.querySelectorAll('[data-product-card]');
	const PRODUCT_CARDS_TO_SHOW = 4;
	const mobileQuery = window.matchMedia('(max-width: 767px)');

	mobileQuery.addEventListener(
		'change',
		debounce((event) => {
			if (event.matches) {
				productCards.forEach((card, index) => {
					if (index >= PRODUCT_CARDS_TO_SHOW) {
						card.classList.add('hidden');
					}
				});

			} else {
				productCards.forEach((card) => {
					card.classList.remove('hidden');
				});
			}
		})
	);

	showMoreButton.addEventListener('click', () => {
		productCards.forEach((card, index) => {
			if (index >= PRODUCT_CARDS_TO_SHOW) {
				card.classList.remove('hidden');
			}
		});
		showMoreButton.classList.add('hidden');
	});
});