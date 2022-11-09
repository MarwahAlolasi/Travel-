class Form {
	_parentEl = document.querySelector('.plan__form');

	getInput() {
		const destination = this._parentEl.querySelector('#city').value;
		const start = this._parentEl.querySelector('#start').value;
		const end = this._parentEl.querySelector('#end').value;
		const query = {
			input: destination,
			start: start,
			end: end,
		};

		this._clearInput();
		return query;
	}

	_clearInput() {
		this._parentEl.querySelector('#city').value = '';
		this._parentEl.querySelector('#start').value = '';
		this._parentEl.querySelector('#end').value = '';
	}

	addHandler(handler) {
		this._parentEl.addEventListener('submit', e => {
			e.preventDefault();
			const id = e.target
				.querySelector('.plan__link')
				.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
			});

			handler();
		});
	}
}

export default new Form();
