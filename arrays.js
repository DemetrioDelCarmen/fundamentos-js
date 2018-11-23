
var Pedro = {

    nombre: 'Pedro',
    apellido: 'Bolaños',
    edad: 20,
    altura:1.81,
    cantidadLibros:99
}


var Mictor = {

    nombre: 'Pedro',
    apellido: 'Bolaños',
    edad: 20,
    altura:1.60,
    cantidadLibros: 14
}

var Demetrio ={
    nombre:'Demetrio',
    apellido:'Gómez',
    edad: 19,
    altura: 1.78,
    cantidadLibros: 156
}

var Chapa ={

        nombre: 'Montserrat',
        apellido: 'Ochoa',
        edad:19,
        altura: 1.89,
        cantidadLibros: 12

}
    

         var personas = [Pedro, Demetrio, Chapa, Mictor]
         const reducer = (acum, {cantidadLibros}) => acum +cantidadLibros
         
         var totalLibros = personas.reduce(reducer, 0)
         console.log(`Se tienen ${totalLibros} entre todas las personas`)

    // const ALTA_ESTATURA = 1.8
    // const esAlta = ({altura}) => altura >=ALTA_ESTATURA
    // const  esBaja = ({altura}) => altura <ALTA_ESTATURA
    

    // var personasBajas = personas.filter(esBaja)
    // var personasAltas = personas.filter(esAlta)

    // console.log(personasBajas)



     const pasarAlturaACm = persona => ({       
                ...persona,
                altura:  persona.altura*100
     })

    // var personasCm= personas.map(pasarAlturaACm)
    // console.log(personasCm) 