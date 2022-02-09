(() => {

    abstract class Mutant {
        
        constructor(
            public name:string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo a salvo'
        }
    };

    class Vilian extends Mutant {
        consquistarMundo() {
            return 'Mundo conquistado'
        }
    };

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Vilian('Magneto', 'Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.consquistarMundo());
    
    const printName = ( character: Mutant ) => {
        console.log(character.name);    
    }

    // printName( magneto );
})()