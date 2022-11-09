class Message {
	_updateEl = document.querySelector('.trips__update');
	_statusEl = document.querySelector('.trips__status');
	_addMessage = 'New trip added';
	_deleteMessage = 'Trip deleted';
	_errorMsgCity =
		'Oops, we could not find the city you entered, please try again!';
	_errorMsgDate = 'Invalid date, please try again!';

	_clearUpdate() {
		this._updateEl.innerHTML = '';
	}

	_clearStatus() {
		this._statusEl.innerHTML = '';
	}

	renderNumOfTrips(num) {
		const markup = `
			<span class="trips__num">You have ${(num = 0 ? 0 : num)} ${
			num > 1 ? 'trips' : 'trip'
		}</span>
		`;
		this._clearStatus();
		this._statusEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderSpinner() {
		const markup = `
	  	<i class="fas fa-circle-notch fa-spin trips__spinner"></i>
		`;
		this._clearUpdate();
		this._updateEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderAddMsg(msg = this._addMessage) {
		const markup = `
          <span class="trips__added">${msg}</span>
        `;
		this._clearUpdate();
		this._updateEl.insertAdjacentHTML('afterbegin', markup);
		const el = document.querySelector('.trips__added');
		this.fadeText(el);
	}

	renderDeleteMsg(msg = this._deleteMessage) {
		const markup = `
          <span class="trips__deleted">${msg}</span>
        `;
		this._clearUpdate();
		this._updateEl.insertAdjacentHTML('afterbegin', markup);
		const el = document.querySelector('.trips__deleted');
		this.fadeText(el);
	}

	renderErrorCity(msg = this._errorMsgCity) {
		const markup = `
			<span class="trips__error">${msg}</span>
      `;
		this._clearUpdate();
		this._updateEl.insertAdjacentHTML('afterbegin', markup);
	}

	renderErrorDate(msg = this._errorMsgDate) {
		const markup = `
			<span class="trips__error">${msg}</span>
      `;
		this._clearUpdate();
		this._updateEl.insertAdjacentHTML('afterbegin', markup);
	}

	fadeText(el) {
		setTimeout(() => {
			el.classList.add('disappear');
		}, 1500);
	}
}

export default new Message();
