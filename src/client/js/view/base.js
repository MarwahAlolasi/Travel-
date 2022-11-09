export default class Base {
	_data;

	render(data) {
		this._data = data;

		const markup = this._generateMarkup();
		this._parentEl.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentEl.innerHTML = '';
	}
}
