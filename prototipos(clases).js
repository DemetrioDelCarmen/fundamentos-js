    class Persona{

        constructor(nombre, apellido,altura) {
            this.nombre = nombre
            this.apellido = apellido
            this.altura = altura
    
         }
         saludar(fn){
            var {nombre,apellido} = this
            console.log(`Hola me llamo ${nombre} ${apellido}`)
            if(fn){

                    fn(nombre,apellido)
            }
         }

         soyAlto(){

            return this.altura>=1.80

         }
    }

        class Desarrollador extends Persona{

            constructor(nombre, apellido,altura){
               super(nombre,apellido,altura)
            }
            saludar (fn){
                var {nombre,apellido} = this
             
                console.log(`Hola me llamo ${nombre}  ${apellido}  y soy desarrollador`)
                if(fn){

                    fn(nombre,apellido,true)
                }
            }

        }
       
        function responderSaludo (nombre,apellido, esDev){

            console.log(`Buen día ${nombre} ${apellido}`)
            if(esDev){

                    console.log('Ah! mira, no sabía que eras desarrollador/a')
            }
        }
       

    var deme = new Persona('Demetrio','Del Carmen',1.91)
    var shacha = new Persona('Shacha','Fitness',1.78)
    var erika = new Desarrollador('Erika','Gonzales',1.43)

    deme.saludar(responderSaludo)
    shacha.saludar()
    erika.saludar(responderSaludo)



   
