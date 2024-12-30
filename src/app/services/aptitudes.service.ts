import { Injectable } from "@angular/core";
import { Aptitude } from "../models/aptitude";


@Injectable({
    providedIn: "root"
})

export class AptitudesService
{
    private aptitudes: Aptitude[] =
    [
        new Aptitude(
            "Création de sites web dynamiques",
            "Créer des sites ou applications web entières, ou me concentrer sur \
            l'interface utilisateur des projets est la chose que je préfère faire !",
            [
                "HTML", "CSS", "PHP", "CodeIgniter", "JavaScript", "React", "Angular", "Figma"
            ],
            "/assets/images/code_snippet.jpg",
            "Extrait de code."
        ),

        new Aptitude(
            "Scripting",
            "Je sais réaliser des scripts basiques. Je comprends les \
            concepts de l'orienté objet.",
            [
                "Python", "Bash", "Java", "CSharp", "C++", "PowerShell"
            ],
            "/assets/images/terminal.jpg",
            "Terminal."
        ),

        new Aptitude(
            "Usage de base de données",
            "Je crée et maintiens des bases de données relationnelles ; le SQL n'a plus de secrets pour moi. Je possède quelques connaissances sur le NoSQL.",
            [
                "MySQL", "MongoDB"
            ],
            "/assets/images/database.jpg",
            "Data center."
        ),

        new Aptitude(
            "Outils Microsoft",
            "En dehors de la programmation, je sais réaliser des documents raffinés \
            et des présentations attrayantes.",
            [
                "Word", "Excel", "PowerPoint"
            ],
            "/assets/images/documents.jpg",
            "Pile de cahiers."
        ),
    ]

    getAptitudes(): Aptitude[]
    {
        return this.aptitudes;
    }
}