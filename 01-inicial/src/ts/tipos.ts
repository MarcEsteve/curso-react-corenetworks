// Tipos en Typescript

// Sintaxis básica de declaración
// let identificador: tipo;

// Tipos primitivos

// string

let message: string; // Estableciendo tipado fuerte a la variable como string

message = 'Hola Mundo!';
// message = 12; // Error

// number (ya existen los bigint)

let resultado: number;
resultado = 12.45;

// let logsCounter: bigint; // Disponible para ES2020 en adelante
// logsCounter = 79874676384638768436874368347n;

// boolean

let mayorEdad: boolean;
mayorEdad = false;

// null ó undefined

// poco utilizado

// Cuando declaramos e inicializamos se produce inferencia de tipos
// y podemos declarar o no el tipo

let puntuacion = 12; // No es necesario el tipo number porque lo obtiene por inferencia
// puntuacion = '12'; //error

// any (romper la inferencia)

let id: any = 2876; // El tipo any permitirá cualquier tipo primitivo o compuesto
id = 'A1876861';

// Tipos complejos

// Arrays
// let identificador: tipo-elemento[] ó let identificador: Array<tipo-elemento>

let frutas: string[]; // Array de elementos de tipo string
let puntuaciones: Array<number>; // Array de elementos de tipo number

frutas = ['peras','manzanas','naranjas'];

// Tipado de funciones 

function suma(operando1: number, operando2: number): string {
    return 'La suma es ' + operando1 + operando2;
}

suma(2,3);

function setMensaje(mensaje: string): void { // Dispone del tipo void para funciones sin retorno
    console.log(mensaje);
}

// Parámetros opcionales

function multiplicacion(operando1: number, operando2: number, mensaje?: string): string {
    return mensaje ? mensaje + operando1 * operando2 : 'El resultado es ' + operando1 * operando2;
}

const resultado1 = multiplicacion(10, 5);
const resultado2 = multiplicacion(2, 4, 'Solución: '); // Solución: 8

// Tipos genéricos (definen en tiempo de invocación)

function getResultado<T>(valor: T): string {
    return 'El resultado es ' + valor;
}

const resultado3 = getResultado<string>('9.80'); // En la invocación definimos el tipo
const resultado4 = getResultado<number>(9.9);

// Tipos de unión

type _id = string | number; // Los tipos _id podrán tener string o number

let referencia: _id = 123;
referencia = '0000234';
// referencia = false;

// Tipos de unión compleja (valores que podrán tener las variables con ese tipo)
// En JavaScript no existen los tipos unión, se implementan con validaciones en tiempo de ejecución
type razasPerroAceptadas = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';


let toby: razasPerroAceptadas = 'Mastín';
// toby = 'Chihuahua'; // Error

// Enumerados (enum) se usan para definir conjuntos de valores constantes
// En JavaScript no existen los enumerados, se implementan como objetos
enum RazasPerro {
    PastorAleman = 'Pastor Alemán',
    PastorBelga = 'Pastor Belga',
    Mastin = 'Mastín'
}

let rex: RazasPerro = RazasPerro.PastorAleman;
// rex = 'Chihuahua'; // Error

// Diferencias entre tipos e interfaces
// - Los tipos son más versátiles (uniones, primitivos, genéricos, tuplas, etc)
// - Las interfaces son más rígidas pero permiten definir implementaciones obligatorias para clases
// - Una interfaz puede extender otra interfaz (herencia múltiple)
// - Un tipo no puede extender otro tipo pero puede componerse de otros tipos (uniones)
// - Una clase puede implementar múltiples interfaces pero sólo extender una clase