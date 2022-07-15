/*1. Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario.*/
//suma
var num1 = prompt ("Ingrese un primer número entero: ");
num1 = parseInt(num1);
var num2 = prompt("Ingrese un segundo número entero: ");
num2 = parseInt(num2);
var suma= num1+num2;
var resta = num1-num2;
var multiplicacion = num1*num2;
var division = num1/num2;
alert("el resultado de la suma :   " + suma );
alert("el resultado de la resta :   " + resta );
alert("el resultado de la multiplicacion :   " + multiplicacion );
alert("el resultado de la division :   " + division );




/*2. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es (0 °C × 9/5) + 32 = 32 °F */

var celsius = parseFloat(prompt("Ingrese un celsius: "));
var kelvin = celsius + 273.15
var resultado = kelvin.toFixed(2)
alert(`La cantidad transformada de celsius a kelvin es: ${resultado}`)

var Celsius = parseFloat(prompt("Ingrese un celsius: "));
var fahrenheit= celsius * 9/5 + 32
var resultado = fahrenheit.toFixed(2)
alert(`La cantidad transformada de celsius a fahrenheit es: ${resultado}`)




/* 3. Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal.*/

var cantidadendias = parseFloat(prompt("Ingrese cantidad en dias: "));
var anos = cantidadendias/365
var semana = cantidadendias/7
var dias = cantidadendias%365
var resultado = cantidadendias.toFixed(2)
var resultado = semana.toFixed(2)
var resultado = dias.toFixed(2)
alert("La cantidad en años es :   " + division )
alert("cantidad en semanas es :   " + division )
alert("La cantidad de dias es :   " + porcentaje )


/* 4. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados.*/



var num3 = prompt("Ingresa el primer numero entero",);
num3 = parseFloat(num3)

var num4 = prompt("ingresa el segundo numero entero",);
num3 = parseFloat(num3)

var num5 = prompt("Ingresa el tercer numero entero");

num5 = parseFloat(num5)

var num6 = prompt("Ingresa el cuarto numero");
num6 = parseFloat(num6)


var promedionum = ((num3 + num4 + num5 + num6 ) / 4).toFixed(2);
alert("el promedio es:  " + promedionum)