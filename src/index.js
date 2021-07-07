import validator from './validator.js';
console.log(validator);

/*En adelante se observan las funciones que dentro del botón 'Validar' permiten el despliegue de la vetana
modal con los resultados, en la que se aplican los metodos Maskify e isValid contenidos en el 
objeto Validator en el archivo Validator.js, importado a este documento en las primeras lineas del codigo */

const btnR = document.querySelector("#btnModalR");
btnR.addEventListener('click', () => {
	let cNum = document.getElementById('cNumero').value;
	const masked = validator.maskify(cNum); //linea 10 y 11 se declaran las variables constantes que guardan los metodos isValid y Maskify
	const isValid = validator.isValid(cNum);
	if (cNum === '' || cNum.length > 18) {
		window.alert('Ingresa un numero de tarjeta valido'); //la propiedad especificada en la linea 12 y 13 dictamina que en caso de que
		//el valor recibido en cNum (variable que guarda el numero de tarjeta) sea vacío o mayor a 18, entonces se emitirá una alerta de rechazo

	} else if (document.getElementById("btnModalR")) { //a partir de esta linea y hasta la linea se despliega la ventana modal con los resultados
		let modalR = document.getElementById("tvesModalR");
		let spanR = document.getElementsByClassName("closeR")[0];
		let bodyR = document.getElementsByTagName("body")[0];

		btnR.onclick = function () {
			modalR.style.display = "block";

			bodyR.style.position = "static";
			bodyR.style.height = "100%";
			bodyR.style.overflow = "hidden";

			if (isValid === true) { //se efectuan los resultados aplicando isValid y Maskify, metodos que validan el numero de tarjeta y lo ocultan
				document.getElementById('Result').innerHTML = 'El numero ' + masked + ' es Valido. Es legal usar tu tarjeta. ';
			} else {
				document.getElementById('Result').innerHTML = 'El numero ' + masked + ' falso. No es legar usar tu tarjeta. ';
			}
		}

		spanR.onclick = function () {
			modalR.style.display = "none";

			bodyR.style.position = "inherit";
			bodyR.style.height = "auto";
			bodyR.style.overflow = "visible";
			document.getElementById('cNumero').value = '';
		}

		window.onclick = function (event) {
			if (event.target == modalR) {
				modalR.style.display = "none";

				bodyR.style.position = "inherit";
				bodyR.style.height = "auto";
				bodyR.style.overflow = "visible";

			}
		}
	}

}

);

//el condicional a continuación usando metodos parecidos al anterior ya visto, despliega la ventana modal de 'Muestrame como hacerlo
if (document.getElementById("btnModal")) {
	var modal = document.getElementById("tvesModal");
	var btn = document.getElementById("btnModal");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function () {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	}

	span.onclick = function () {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";

			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	}
}

//ventana modal de conoce más

if (document.getElementById("btnModal")) {
	let modal1 = document.getElementById("tvesModal1");
	let btn1 = document.getElementById("btnModal1");
	let span1 = document.getElementsByClassName("close1")[0];
	let body1 = document.getElementsByTagName("body")[0];

	btn1.onclick = function () {
		modal1.style.display = "block";

		body1.style.position = "static";
		body1.style.height = "100%";
		body1.style.overflow = "hidden";
	}

	span1.onclick = function () {
		modal1.style.display = "none";

		body1.style.position = "inherit";
		body1.style.height = "auto";
		body1.style.overflow = "visible";
	}

	window.onclick = function (event) {
		if (event.target == modal1) {
			modal1.style.display = "none";

			body1.style.position = "inherit";
			body1.style.height = "auto";
			body1.style.overflow = "visible";
		}
	}
}
