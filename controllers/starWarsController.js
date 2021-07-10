const fetch = require('node-fetch');

const starWarsController = {
    home: async (req, res) => {
      
        let personajes = await fetch('https://swapi.dev/api/people').then(response=>response.json());
        let personajes2 = await fetch('https://swapi.dev/api/people/?page=2').then(response=>response.json());
        let personajes3 = await fetch('https://swapi.dev/api/people/?page=3').then(response=>response.json());
        let personajes4 = await fetch('https://swapi.dev/api/people/?page=4').then(response=>response.json());
        personajes4 = personajes4.results;
        personajes3 = personajes3.results;
        personajes = personajes.results;
        personajes2 = personajes2.results;
        personajes =personajes.concat(personajes2);
        personajes = personajes.concat(personajes3);
        personajes = personajes.concat(personajes4);
        //console.log(personajes.length);
        //return res.send(personajes);
        return res.render('index',{personajes})

		/*fetch('https://restcountries.eu/rest/v2/all')
        .then (response=>response.json())
        .then(countries => {
            res.render('paises', {countries});
        })*/
	}


   
}

module.exports = starWarsController;