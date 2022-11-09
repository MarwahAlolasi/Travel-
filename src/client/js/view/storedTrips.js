import Base from './base';
import Trip from './trip';

class StoredTrips extends Base {
	_parentEl = document.querySelector('.trips__list');

	// Render localStrorage-stored trips on load
	addHandlerRenderSavedTrip(handler) {
		window.addEventListener('load', handler);
	}

	// Delete user-clicked trip from DOM
	addHandlerDeleteTrip(handler) {
		this._parentEl.addEventListener('click', e => {
			const deleteBtn = e.target.closest('.trips__btn');
			if (!deleteBtn) return;

			const deleteEl = deleteBtn.parentNode.parentNode;
			const tripId = deleteEl.getAttribute('id');
			deleteEl.remove();
			handler(tripId);
		});
	}

	// Generate markup for localStrorage-stored trips
	_generateMarkup() {
		return this._data.map(trip => Trip.render(trip, false)).join('');
	}
}

export default new StoredTrips();
