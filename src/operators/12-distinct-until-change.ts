import {from, of} from 'rxjs';
import {distinct, distinctUntilChanged, distinctUntilKeyChanged} from 'rxjs/operators';

/**
 * Distinct: funciona como BBDD, solo devuelve los valores que
 * son distintos entre sí. Si un dato ya se envío, lo omite
 */
console.warn('distinct')
const numeros$ = of<number | string>(1, '1', 1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 1, 1, 1, 1);
numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Person {
    nombre: string
}

const persons: Person[] = [
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
    {nombre: 'Megaman'},
    {nombre: 'ZeroX'},
    {nombre: 'ZeroX'},
    {nombre: 'Zero'},
    {nombre: 'Zero'}
];

from(persons).pipe(
    distinct(person => person.nombre)
).subscribe(console.log);


/**
 * distinctUntilChanged: emite valores siempre que el valor
 * anterior no sea el mismo. Unicamente hace la comprobación del dato sobre
 * el dato emitido anteriormente
 */
console.warn('distinctUntilChanged')
numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

from(persons).pipe(
    distinctUntilChanged(((before: Person, actual: Person) => before.nombre === actual.nombre))
).subscribe(console.log);
