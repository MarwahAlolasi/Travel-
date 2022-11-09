import dayjs from '../plugin/dayjs';
import Base from './base';

class Trip extends Base {
	_parentEl = document.querySelector('.trips__list');

	_generateMarkup() {
		return this._generateTripCard(this._data);
	}

	_generateTripCard(trip) {
		return `
			<li class="trips__card" id="${trip.id}">
				<div class="trips__image">
					<img src="${trip.pic.url}" alt="${trip.pic.alt}">
				</div>
				<div class="trips__content">
					<h3 class="trips__header">
						${trip.destination}<br>
						${dayjs(trip.date.start).format('MMMM YYYY')}
					</h3>
					<div class="trips__meta">
						<span class="trips__date">${this._formatDate(trip)}</span>
						<span class="trips__countdown">(${trip.date.countdown})</span>
					</div>
					<ul class="trips__weather">
						${trip.weather.map(this._generateWeatherData).join('')}
					</ul>
				</div>
				<div class="trips__edit">
					<button class="btn trips__btn">Delete</button>
				</div>
			</li>
		`;
	}

	_formatDate(d) {
		const startM = dayjs(d.date.start).format('MMM');
		const startD = dayjs(d.date.start).format('D');
		const startY = dayjs(d.date.start).format('YYYY');
		const endM = dayjs(d.date.end).format('MMM');
		const endD = dayjs(d.date.end).format('D');
		const endY = dayjs(d.date.end).format('YYYY');
		if (startY === endY && startM === endM)
			return `${startM} ${startD} - ${endD}, ${startY}`;
		else if (startY === endY && startM !== endM)
			return `${startM} ${startD} - ${endM} ${endD}, ${startY}`;
		else return `${startM} ${startD}, ${startY} - ${endM} ${endD}, ${endY}`;
	}

	_generateWeatherData(forecast) {
		return `
			<li class="trips__forecast">
				<span class="trips__forecast-date">${dayjs(forecast.date).format(
					'ddd, DD'
				)}</span>
				<div class="trips__forecast-icon">
					<img src="../../media/${forecast.icon}.png" alt="${forecast.description}">
				</div>
				<div class="trips__forecast-meta">
					<span class="trips__forecast-temp">
						${Math.round(forecast.high)}° / ${Math.round(forecast.low)}°
					</span>
					<div class="trips__forecast-pop">
						<i class="umbrella icon"></i>
						<span class="trips__forecast-high">${forecast.rain}%</span>
					</div>
				</div>
			</li>
		`;
	}
}

export default new Trip();
