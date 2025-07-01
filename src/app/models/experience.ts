import { Address } from "./address";

export class Experience
{
    constructor(public activity: string,
                public startYear: number | null,
                public endYear: number | null,
                public location: Address | null,
                public description: string,
                public technologiesList: string[]
    ){}
}