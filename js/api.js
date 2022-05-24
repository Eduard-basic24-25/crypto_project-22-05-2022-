async function getDataCurrency() {
	let url = 'https://v6.exchangerate-api.com/v6/6d90771bf7d7e8bd09657c9a/latest/USD';
	let response = await fetch(url); // читаем ответ в формате JSON
	return await response.json();
}

export default getDataCurrency;

