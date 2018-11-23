
var demetrio = {

    nombre: 'demetrio',
    edad: 19,
    peso: 75

}


const aumentarDePeso = persona => {
    return {
        ...persona,
        peso: persona.peso += INCREMENTO_PESO
    }
}
const adelgazar = persona => {
    return {
        ...persona,
        peso: persona.peso -= INCREMENTO_PESO
    }
}
console.log(`Al inicio del año ${demetrio.nombre} pesa ${demetrio.peso} kg`)
const DIAS_DEL_ANIO = 365
const INCREMENTO_PESO = 0.3
const META = demetrio.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0
while (demetrio.peso > META) {

    if (comeMucho()) {
        aumentarDePeso(demetrio)
        //aumenta peso
    }
    if (realizaDeporte()) {
        adelgazar(demetrio)

    }
    dias += 1
}




console.log(`Pasaron ${dias} días hasta que ${demetrio.nombre} adelgazó 3 kg`)