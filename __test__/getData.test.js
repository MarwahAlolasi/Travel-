require('regenerator-runtime/runtime');
const getData = require('../src/server/getData');

describe('getData', () => {
	test('returns an object with destination data', async () => {
		const testCity = 'tokyo';
		const data = await getData(testCity);

		expect(data).toHaveProperty('destination');
		expect(data.destination).toEqual('Tokyo, Japan');

		expect(data).toHaveProperty('weather');
		expect(typeof data.pic.id).toEqual('number');

		expect(data).toHaveProperty('pic');
		expect(typeof data.weather).toEqual('object');
	});

	test('throws error when user input is invalid', async () => {
		const consoleSpy = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});
		const invalidInput = 'd0famx';
		const invalidData = await getData(invalidInput);

		expect(invalidData).toBeFalsy();
		expect(consoleSpy).toHaveBeenCalled();
	});
});
