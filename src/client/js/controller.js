import * as model from './model';
import SmoothScroll from './view/smoothScroll';
import Form from './view/form';
import Message from './view/message';
import Trip from './view/trip';
import StoredTrips from './view/storedTrips';

const controlTrip = async () => {
	try {
		Message.renderNumOfTrips(model.state.savedTrip.length);

		// 1 Get user input
		const inputData = Form.getInput();
		const { input, start, end } = inputData;

		// 2 Validate date
		const validDate = model.validateDate(start, end);
		if (!validDate) {
			Message.renderErrorDate();
			return;
		}

		// 3 Show spinner
		Message.renderSpinner();
		await model.sendData('/trip', { input });

		// 4 Store copy of trip data into savedTrip array
		model.addTrip(model.state.trip);

		// 5 Render trip
		Message.renderAddMsg();
		Message.renderNumOfTrips(model.state.savedTrip.length);
		Trip.render(model.state.trip);
	} catch (err) {
		Message.renderErrorCity();
		console.error(err);
	}
};

const controlSavedTrip = () => {
	Message.renderNumOfTrips(model.state.savedTrip.length);

	// Add searched-trip to savedTrip array and save this array in local storage
	if (model.state.savedTrip.length > 0)
		StoredTrips.render(model.state.savedTrip);
};

const controlDeleteTrip = id => {
	model.deleteTrip(id);
	Message.renderNumOfTrips(model.state.savedTrip.length);
	Message.renderDeleteMsg();
};

export const init = () => {
	SmoothScroll.addHandlerScrollToTrips();
	SmoothScroll.addHandlerScrollToTop();
	StoredTrips.addHandlerRenderSavedTrip(controlSavedTrip);
	Form.addHandler(controlTrip);
	StoredTrips.addHandlerDeleteTrip(controlDeleteTrip);
};
