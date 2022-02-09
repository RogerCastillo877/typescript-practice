(() => {

    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor( public name: string ) {};

        static callApocalipsis(): Apocalipsis {

            if( !Apocalipsis.intance ) {
                Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis el único')
            }
            
            return Apocalipsis.intance;
        }
    }

    // const apocalipsis = new Apocalipsis('Soy Apocalipsis');
    // console.log( apocalipsis );

    const apocalipsis = Apocalipsis.callApocalipsis()
})()