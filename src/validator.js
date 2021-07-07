
const validator = {
  //tambíen llamado algoritmo del modulo 10, el algoritmo de Luhn que valida distan convinaciones de numeros
  //entre ellos tarjetas de creditos operado en el metodo isValid, con el uso de operadores ternarios y condicionales
  //opera el mecanismo de validación de este programa recibiendo primero el valor de la tarjeta de credito y sometiendolo a distintas operaciones
  isValid(creditCardNumber) {
    let converseDig = (creditCardNumber).split('').reverse();
    let parDig = 0;
    let imparDig = 0;
    let sumatoria = 0;
    for (let i = 0; i < converseDig.length; i++) {
      if (i % 2 === 1) {
        let paresDig = (converseDig[i] * 2);
        if (paresDig >= 10) {
          paresDig = (paresDig - 10) + 1
        }
        parDig += paresDig;
      } else {
        imparDig += parseInt(converseDig[i]);
      }
    }
    sumatoria = (parDig + imparDig);
    return sumatoria % 10 === 0 ? true : false
  },

  //el metodo maskify oculta todos los primeros valores del valor recibido de la tarjeta de credito mientras deja los ultimos cuatro siempre
  //visibles. ej: 182938382283 = ########2283, 1234 = 1234.

  maskify(creditCardNumber) {
    return creditCardNumber.slice(0, -4).replace(/./g, '#') + creditCardNumber.slice(-4);

  },



};
//exportando objeto validator para ser recibido en el archivo index.js
export default validator;


