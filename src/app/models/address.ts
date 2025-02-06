export class Address
{
    constructor(public name: string | null,
                public address: string,
                public addressNumber: number | null,
                public npa: number,
                public city: string
    ){}
}