
const validator = {

isValid(creditCardNumber){
let converseDig = (creditCardNumber).split('').reverse();
let parDig = 0;
let imparDig = 0;
let sumatoria = 0;
 for (let i=0; i<converseDig.length; i++) {
   if (i%2 === 1) {
     let paresDig = (converseDig[i]*2);
     if (paresDig >= 10){
       paresDig = (paresDig-10)+1
     }
     parDig += paresDig; 
   } else {
     imparDig += parseInt(converseDig[i]);
   }
 }
 sumatoria = (parDig + imparDig);
 return sumatoria %10 ===0 ? true: false
},


maskify(creditCardNumber) {
return creditCardNumber.slice(0, -4).replace(/./g, '#') + creditCardNumber.slice(-4);

},



};

export default validator;


