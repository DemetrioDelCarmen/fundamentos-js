var Shasha = {

        nombre: 'Shasha',
        apellido: 'Lipzi',
        edad:28

}

    var Dario = {

        nombre: 'Dario',
        apellido: 'Proligo',
        edad:32
    }

    var Demetrio = {

            nombre: 'Demetrio',
            apellido:'Del Carmen',
            edad:19


    }

            function imprimirNombreMayusculas(persona){
                    // var nombre = persona.nombre 
                    var {nombre} = persona //--es lo mismo
                    console.log(nombre.toUpperCase())


            }

            function  saludarPersonaConDatos(persona){

                var {nombre } = persona
                var {edad} = persona
                console.log(`Hola me llamo ${nombre} y tengo ${edad}`)

            }

            function cumpleanios(persona){

                return{

                    ...persona,
                    edad: persona.edad +1

                }
        
            }
    // imprimirNombreMayusculas(Shasha)   
    saludarPersonaConDatos(Shasha)
    saludarPersonaConDatos(Dario)
    // imprimirNombreMayusculas(Dario.nombre)

