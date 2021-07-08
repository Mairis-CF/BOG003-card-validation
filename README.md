<img src = 'media/icono.png'>
# Do validate
###### Do validate es un software gratuito de código abierto que permite validar una tarjeta de crédito de hasta 18 caracteres.

## Índice de contenidos
* [Instalación](#item1)
* [investigación UX](#item2)
* [Funcionalidades](#item3)
* [Notas](#item4)

## Instalación y funcionamiento
Forkea  [este](https://github.com/Mairis-CF/BOG003-card-validation "este") repositorio de GitHub hacia tu nube y descargalo en modalidad remota en tu maquina (recomendable de 64bits),  correras en tu consola los comandos 'npm install' con el que se instalarán todas las depencias necesarias y una vez terminado ese proceso, el siguiente comando será 'npm start' y si todo sale bien, podrás acceder al programa desde la dirección de localhost que te desplegará y correr sin problemas el comando 'npm test'.

##Investigación UX

###2.1 Proceso de conceptualización y creación

Durante el proceso de conceptualización y creación de este proyecto, se entrevistó la idea con colegas de oficio y personas que fueron identificadas como publico objetivo y potencial, pero incluso antes de eso, la idea de este proyecto encuentra como guía las siguientes preguntas y respuestas que fueron cruciales en el camino las primeras maquetas:

###### ¿Qué necesidad se evidenció en los posibles usuarios y cómo puede Do Validate suplirlas?

*En la actualidad el uso de dinero tradicional (monedas y billetes), se reduce activa y progresivamente, cada vez son más las tiendas, ecommerce, empresas, etc. que aceptan como principal medio de pago las tarjetas de crédito, incluso un consumidor del común puede verse en la necesidad de saber si la tarjeta de crédito que le ha sido facilitada es o no valida, por lo tanto y frente a esto, la apuesta se hizo en materia de simplicidad y confianza con un software de código abierto y facilmente adsequible para cualquier tipo de usuario.*

###### ¿Cómo beneficia el produco final a los usuarios?
*Con la intención clara de desarrollar un software de código abierto facilmente manipulable, el siguiente reto fue la simpleza: **Mientras más sencillo, más adsequible y usable** por lo tanto, la interfaz de Do Validate cuenta con un ecosistema simple de facil compresión y paramétros claros que hacen a la navegación sencilla y limpia.*

### 2.2 Bosquejos, borradores y decisiones finales.

El producto final evidenciable no fue logrado por medio de un ducto recto, a diferencia de nuestra interfaz actual, el proceso de creación pudo verse complicado en más de un sentido mientras partiamos de esto:

<img src = 'media/sketches/Borrador1.jpg'>
*Primeros borradores hechos en papel*

<img src = 'media/sketches/Borrador2.jpg'>

a esto, los prototipos de alta fidelidad diseñados en figma:

<img src = 'media/sketches/figma1.png'>

en los que se conceptualizó la idea final de interfaz 

<img src = 'media/sketches/figma3.png'>


<img src = 'media/sketches/figma4.png'>

<img src = 'media/sketches/figma6.png'>

y luego de algunas entrevistas con usuarios potenciales, la dicisión de agregar un poco más de creatividad y estilo quedó tomada por medio de insertar un elegante trabajo de animación facilitado por el estudio de arte ubicado en Vancouver, [Gaint Ant](https://www.giantant.ca/ "Gaint Ant") con un resultado asombroso:

<img src = 'media/sketches/figma5.png'>

## Funcionalidades

Este proyecto tiene como finalidad validar una tarjeta de crédito con un máximo de longitud de 18 caracteres, mientras se ocultan los primeros numeros y se permanecen visibles los ultimos cuatro siempre usando los métodos isValid y maskify en el objeto Validator, mismo que se encuentra el el archivo 'Validator.js' y las distintas manipulaciones del DOM encontradas en el archivo 'index.js'

##Notas

Este proyecto fue desarrollado durante el ciclo de aprendizaje y prácticas de [Laboratoria](https://github.com/Laboratoriahttp:// "Laboratoria") por Maris Castro Flórez.

Para una mejor  visualización, se recomienda acceder a la dirección de localhost por medio de Motzilla o Chrome.



**¿Este documento no resuelve tus dudas?** ¡Deja un comentario!


###### tags: `Templates` `Documentation`