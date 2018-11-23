 var signo = prompt('¿Cuál es tu signo?')

    console.log(signo)

    switch(signo){

            case 'Acuario':
            console.log('Te va a ir bien xd')
            break;

            
            case 'Tauro':
            console.log('Te va a ir dostres xd')
            break;

            case 'Pisis':
            case 'pisis':
            case 'Písis':
            case 'písis':
            console.log('recuperaras tu estabilidad emocional xd')
            break;

            case 'Aries':
            console.log('nel perro xd')
            break;

            case 'Cancer':
            case 'Cáncer':
            case 'cáncer':
            console.log('mal  xd')
            break;
            
            case 'Geminis':
            case 'géminis':
            case 'Géminis':
            case 'geminis':
            console.log('super xd')
            break;
            
        default:
            console.log(`El signo ${signo} no es válido`)
            
    }