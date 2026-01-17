import { Injectable } from "@angular/core";
import { Characteristic } from "../models/characteristic";

@Injectable({
    providedIn: "root"
})

export class CharacteristicsService
{
    private characteristics: Characteristic[] =
    [
        new Characteristic(
            "Appliqué",
            "medal",
            "J'effectue le travail demandé avec qualité, \
            et peaufine les plus petits des détails."
        ),
        new Characteristic(
            "Bienveillant",
            "heart",
            "Je suis toujours prêt à aider ceux dans le besoin. \
            Je suis ouvert d'esprit."
        ),
        new Characteristic(
            "Organisé",
            "calendar-days",
            "Mon environnement de travail est organisé, propre. \
            Un espace ordonné m'aide à me repérer et à exceller."
        ),
        new Characteristic(
            "Méthodique",
            "stairs",
            "Je réalise mes tâches séquentiellement. \
            J’organise mes projets en éléments modulaires et clairs."
        )
    ];

    getCharacteristics(): Characteristic[]
    {
        return this.characteristics;
    }
}