import { Tag } from "../types/tag.type";

export class Project
{
    constructor(public name: string,
                public description: string,
                public technologiesUsed: string[],
                public imageSrc: string,
                public siteUrl: string,
                public repoUrl: string,
                public tag: Tag
    ){}
}