// import { Hero, Hero2 as Loco } from "./class/Hero";
// const Hero2 = 123;

// const ironman = new Hero('Tonny', 15, 20);

// import * as HeroClass from "./class/Hero";
// import powers from "./data/powers";

// const ironman = new HeroClass.Hero('Tonny', 15, 20);

// console.log(ironman);

// console.log( powers );

// import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';

// printObject(123);
// printObject( new Date);
// printObject( {a:1, b:2, c:3} );
// printObject( [1,2,3,4 ]);
// printObject( 'hola');

// console.log( genericFunction(3.141618).toFixed(2) );
// console.log( genericFunction('Hola').toUpperCase() );
// console.log( genericFunction( new Date() ).getDate() );

// console.log( genericFunctionArrow(3.141618).toFixed(2) );
// console.log( genericFunctionArrow('Hola').toUpperCase() );
// console.log( genericFunctionArrow( new Date() ).getDate() );

import { genericFunctionArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces';
// import { Hero } from './interfaces/hero';
// import { Villain } from './interfaces/villian';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel);
