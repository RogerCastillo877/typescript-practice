function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if( print ) {
        return printToConsole;
    } else {
        return () => {};
    }
};

const blockPrototipe = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
};

function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        // console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;

        descriptor.value = ( id : number) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe ser entre 1 y 800');
            } else {
                return originalMethod( id )
            }
        }
    }
};

function readOnly ( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {
        // console.log({ target, propertyKey, descriptor });
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this );    
                return '';
            },
            set( this, val ) {
                // console.log(this, val);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })    
            }
        };

        return descriptor;
    }
};

// @printToConsole
@blockPrototipe
@printToConsoleConditional( true )
export class Pokemon {

    @readOnly( true )
    public piblicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonTodDB( id:number ) {
        console.log(`Pokemon guardado en BD ${ id }`);        
    }
}