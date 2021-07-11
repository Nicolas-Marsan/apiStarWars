const fetch = require('node-fetch');


let personajesGlobal ;

const starWarsController = {
    home:async (req, res) => {           
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
        personajesGlobal = personajes;
        console.log(personajes.lenght);
        return res.render('index',{personajes})
		
	},
    porAzar:(req, res) => {  
                
        var num = Math.floor(Math.random()*41);
        
        let personaje=personajesGlobal[num-1];

        //return res.send(personaje);
        return res.render('personaje',{personaje});
		
	},
    porNombre:(req, res) => {  
                
        let nombre=req.body;
        nombre= nombre.nombre;

        let personaje = personajesGlobal.find(uno => uno.name == nombre);
        
        if(personaje==undefined){
            
            return res.send("No se encontro personaje");
        }
        //return res.send(elBuscado);
        return res.render('personaje',{personaje});
		
	}


   
}

module.exports = starWarsController;