(() => {

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => String;
    }

    let flash: Hero = {
        name: 'Barry',
        age: 24,
        powers: [1,2]
    }

    let superman: Hero = {
        name: 'Clark',
        age: 30,
        powers: [1,2]
    }
})()