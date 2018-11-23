const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const options = { crossDomain: true }



function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, options, function (data) {

                resolve(data)

            })
            .fail(() => reject(id))
    })
}



const onPersonError = (id) => {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}


 async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes =  await Promise.all(promesas)
        console.log(personajes)

    } catch (id) {
        onPersonError(id)
    }
  
    

}

obtenerPersonajes()





{

    // obtenerPersonaje(1)
    //   .then(({name})=>{

    //         console.log(`El personaje 1 es ${name}`)
    //         return obtenerPersonaje(2)
    //   })
    //   .then(({name})=>{
    //         console.log(`El personaje 2 es ${name}`)
    //         return  obtenerPersonaje(3)
    //   })
    //   .then(({name})=>{

    //         console.log(`El personaje 3 es ${name}`)

    //   })
    //   .catch(onPersonError) 


}

