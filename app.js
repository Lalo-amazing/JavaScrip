/*Ejercicio
    Desafíos
1.Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
2.Declara una variable llamada nombre y asígnale el valor "Luna".
3.Crea una variable llamada edady asígnale el valor 25.
4.Establece una variable numeroDeVentas y asígnale el valor 50.
5.Establece una variable saldoDisponible y asígnale el valor 1000.
6.Muestra una alerta con el texto "¡Error! Completa todos los campos".
7.Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". 
    Ahora muestra una alerta con el valor de la variable mensajeDeError .
8.Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
9.Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
*/

alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let id_key = 124;
alert("¡Error! /n Completa todos los campos");
let mensajeDeError = "¡Error! /n Completa todos los campos";

alert(mensajeDeError);
let name = prompt("Ingresa tu nombre:");
let clave = prompt("Ingresa la contraseña:");
let edad2 = prompt("Ingresa tu edad:");
if (edad2 >= 18) {
  alert("Puedes obtener tu licencia de conducir jejem");
} else {
  alert("No puedes obetener tu licencia de conducir.");
}
if (nombre == name && id_key == clave) {
  alert("Accediste correctamente");
  alert("nombre:" + nombre);
  alert("edad:" + edad);
  alert("numero De Ventas;" + numeroDeVentas);
  alert("Saldo Disponible:" + saldoDisponible);
} else {
  alert("No estas registrad@");
}
//Al final agregue más cosas para que se viera mejor y agregue más sentencias, por amor al arte 
