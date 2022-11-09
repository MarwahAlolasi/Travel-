import axios from 'axios';
import dayjs from './plugin/dayjs';
import { nanoid } from 'nanoid';

export const state = {
	trip: {
		id: 0,
		destination: '',
		pic: {},
		weather: [],
		date: {},
	},
	savedTrip: [],
};

// Send data to server to make API requests
export const sendData = async (url = '', payload = {}) => {
	const res = await axios.post(url, payload, { withCredentials: true });
	try {
		const { data } = res;
		state.trip.id = nanoid();
		state.trip.destination = data.destination;
		state.trip.pic = {
			url: data.pic.webformatURL,
			alt: data.pic.tags,
		};
		state.trip.weather = data.weather.map(item => {
			return {
				date: item.datetime,
				icon: item.weather.icon,
				alt: item.weather.description,
				high: item.max_temp,
				low: item.min_temp,
				rain: item.pop,
			};
		});
	} catch (err) {
		throw err;
	}
};

export const validateDate = (start, end) => {
	let validation = true;

	const { $y, $M, $D } = dayjs();
	const today = `${$y}-${$M + 1}-${$D}`;

	const tsToday = dayjs(today);
	const tsStart = dayjs(start);
	const tsEnd = dayjs(end);

	const validStart = tsStart.isSameOrAfter(today);
	const validEnd = tsStart.isSameOrBefore(tsEnd);

	// If ok then
	if (validStart && validEnd) {
		const countdown =
			tsToday.to(tsStart) === 'a few seconds ago'
				? 'in 0 day'
				: tsToday.to(tsStart);

		state.trip.date = {
			start: start,
			end: end,
			countdown: countdown,
		};
		return validation;
	}

	return !validation;
};

const updateStorage = () =>
	localStorage.setItem('trip', JSON.stringify(state.savedTrip));

// 1 Every successful search is copied and pushed into savedTrip array
export const addTrip = trip => {
	state.savedTrip.push({ ...trip });
	// 2 Convert savedTrip array in string and save in localStorage
	updateStorage();
};

export const deleteTrip = id => {
	const index = state.savedTrip.findIndex(el => el.id === id);
	state.savedTrip.splice(index, 1);
	updateStorage();
};

// 3 Retrieve string from localStorage, convert in object and update savedTrip array
const init = () => {
	const storedTrip = localStorage.getItem('trip');
	if (storedTrip) state.savedTrip = JSON.parse(storedTrip);
};

init();
