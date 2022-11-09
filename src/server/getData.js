require('dotenv').config();
const axios = require('axios');
const geoUrl = 'http://api.geonames.org/searchJSON?q';
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixUrl = 'https://pixabay.com/api/?';

const getData = async destination => {
	try {
		const resGeo = await axios.get(
			`${geoUrl}=${destination}&maxRows=1&username=${process.env.USERNAME}`
		);

		const { name, countryName, lat, lng } = resGeo.data.geonames[0];

		const [resWeather, resPix1, resPix2] = await Promise.all([
			axios.get(
				`${weatherUrl}&lat=${lat}&lon=${lng}&days=3&key=${process.env.WKEY}`
			),
			axios.get(
				`${pixUrl}key=${process.env.PKEY}&q=${name}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
			),
			axios.get(
				`${pixUrl}key=${process.env.PKEY}&q=${countryName}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=3&pretty=true`
			),
		]);

		const pixData =
			resPix1.data.totalHits > 0
				? resPix1.data.hits[0]
				: resPix2.data.hits[0];

		const destionation =
			name === countryName ? countryName : `${name}, ${countryName}`;

		const apiData = {
			destination: destionation,
			weather: resWeather.data.data,
			pic: pixData,
		};

		return apiData;
	} catch (err) {
		console.error(err);
	}
};

// module.exports = { getData };
module.exports = getData;
