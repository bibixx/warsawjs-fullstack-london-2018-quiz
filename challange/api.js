const fetchApi = () => new Promise(res => setTimeout(() => res({ id: Math.floor(Math.random() * 100000) }), 50)); 

module.exports = fetchApi;