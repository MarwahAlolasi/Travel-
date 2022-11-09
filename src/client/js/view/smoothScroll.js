class SmoothScroll {
	_heart = document.querySelector('.hnav__link');
	_top = document.querySelector('.fnav__link');

	addHandlerScrollToTrips() {
		this._heart.addEventListener('click', e => {
			e.preventDefault();
			const id = this._heart.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
			});
		});
	}

	addHandlerScrollToTop() {
		this._top.addEventListener('click', e => {
			e.preventDefault();
			const id = this._top.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
			});
		});
	}
}

export default new SmoothScroll();
