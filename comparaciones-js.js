var X = 4, Y ='4'

var Shasha ={

    nombre:'Shasha',
    ingeniero: true,
    guitarrista: true,
    cocinero: false,
    cantante:false,
    drone:true,
    edad: 18
}

var otraPersona={

    nombre:'Pedro',
    edad: 17
}

        function imprimirDatos(persona){

            console.log(`${persona.nombre} es`)
            
            if(persona.ingeniero===true){

                console.log('Ingeniero')

            }else{
                console.log('No es ingeniero')
            }
            if(persona.cocinero===true){

                    console.log('Cocinero')

            }else{

                console.log('No es cocinero')
            }
            
            if(persona.guitarrista===true){

                console.log('Guitarrista')

            }else{
                console.log('No es guitarrista')
            }
            
            if(persona.cantante===true){

                console.log('cantante')

            }else{

                console.log('No es cantante')
            }
            
            if(persona.drone===true){

                console.log('Es piloto de dron')

            }else{

                console.log('No es piloto de drone')
            }

        }

        imprimirDatos(Shasha)


        const MAYORIA_DE_EDAD = 18
        
        // const  esMayorDeEdad = function (persona){
        const  esMayorDeEdad =  ({ edad })=> edad >= MAYORIA_DE_EDAD

        
        function validadorEdad(persona){

                if(esMayorDeEdad(persona)){

                        console.log(`${persona.nombre} tiene ${persona.edad} y es mayor de edad`)

                }else if(persona.edad<18){

                    console.log(`${persona.nombre} tiene ${persona.edad} es menor de edad`)


                }

        }

        const esMenorDeEdad = ({edad}) => !esMayorDeEdad({edad}) ? console.log('ACCESO DENEGADO'):console.log('Animo')
      
        function permitirAcceso({edad}){


                if(!esMayorDeEdad({edad})){
                    console.log('ACCESO DENEGADO'+` ${edad}`)
                }else{

                    console.log('ACCESO CONCEDIDO'+` ${edad}`)
                }

        }


        