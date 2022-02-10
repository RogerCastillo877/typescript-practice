(() => {

    interface Client {
        name:string;
        age?: number;
        adrress: Address;
        getFullAddress?( id: number ): string; 
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Rocas',
        age: 30,
        adrress: {
            id: 123,
            zip: 'ABC SUD',
            city: 'Bog'
        },
        getFullAddress( id: number ) {
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Larry',
        age: 25,
        adrress: {
            id: 345,
            zip: 'DEF SUD',
            city: 'Cal'
        }
    }
})()