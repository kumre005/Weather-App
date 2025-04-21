const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Warora&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1f6e70ba57mshaa82b678fc92b04p1a6a23jsn53dba45a5226',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

async function getWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
getWeather();