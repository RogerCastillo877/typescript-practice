(() => {

    class Avenger {
        
        // private name: string;
        // public team: string;
        // public realName?: string;
        static avgAge: number =35;

        constructor(
            private name: string,
            private team: string,
            public realName?: string
            ) {}
            
        bio() {
            return `${ this.name } (${ this.team})`;
        };
    }
    

    const antman: Avenger = new Avenger('Antman', 'capitan', 'Scott');
    // console.log(antman);
    // console.log(antman.bio());
    
})()