(() => {

    class Avenger{
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructir Avenger');    
        }

        private getFullname() {
            return `${ this.name } ${this.realName }`;
        }
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutnat: boolean
        ) {
            super( name, realName )
            // console.log('Constrctor Xmen');            
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set fullName( name: string ) {

            if( name.length < 2 ){
                throw new Error('El nombre debe ser mayor de 2 caracteres')
            }

            this.name = name;
        }

        getFullnameFromXmen() {
            // console.log( super.getFullname() );            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)
    // console.log(wolverine);    
})()