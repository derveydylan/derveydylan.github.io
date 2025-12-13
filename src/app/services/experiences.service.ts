import { Injectable } from "@angular/core";
import { Experience } from "../models/experience";

@Injectable({
    providedIn: "root"
})

export class ExperiencesService
{
    private professionalExperiences: Experience[] =
    [
        new Experience(
            "Apprenti développeur d'applications CFC",
            2022,
            2025,
            {
                name: "ORIF",
                address: "Chemin du Mont-de-Brez",
                addressNumber: 2,
                npa: 1405,
                city: "Pomy"
            },
            "J'effectue ma formation en crééant des projets réalistes et \
            utiles pour la section ou l'ORIF, afin d'acquérir davantage \
            d'expérience professionnelle et apprendre de nouvelles technologies. \
            Je code sur du backend comme sur du frontend.",
            [
                "Bootstrap", "CSS", "CodeIgniter", "Figma", "HTML", "JavaScript", "MySQL", "PHP", "React", "Tailwind"
            ]
        ),
        new Experience(
            "Préapprenti développeur d'applications CFC",
            2021,
            2022,
            {
                name: "ORIF",
                address: "Chemin du Mont-de-Brez",
                addressNumber: 2,
                npa: 1405,
                city: "Pomy"
            },
            "En plus d'enchaîner les exercices de programmation, j'ai expérimenté \
            les autres domaines de l'informatique. J'ai contribué à la création \
            d'un helpdesk et ai traité de nombreux tickets. J'ai aussi créé \
            des petits réseaux, ainsi que installé, configuré, documenté, \
            moult appareils.",
            [
                "Arduino", "Bootstrap", "CSS", "CodeIgniter", "HTML", "PHP", "PowerShell", "Python", "WordPress"
            ]
        ),
        new Experience(
            "Stagiaire en découverte du développement d'applications",
            2019,
            2019,
            {
                name: "UNIL - Université de Lausanne",
                address: "Quartier centre",
                addressNumber: null,
                npa: 1015,
                city: "Lausanne"
            },
            "J'ai découvert les prémices du métier, avec la conception de sites \
            statiques et les bases d'Arduino. J'ai directement su que c'était \
            ce que je voulais faire plus tard.",
            [
                "Arduino", "CSS", "HTML"
            ]
        )
    ];

    private scholarExperiences: Experience[] =
    [
        new Experience(
            "Apprenti développeur d'applications CFC",
            2022,
            2025,
            {
                name: "EPSIC - École professionnelle",
                address: "Rue de Genève",
                addressNumber: 63,
                npa: 1004,
                city: "Lausanne"
            },
            "J'acquiers de nouvelles connaissances dans divers domaines pour mon futur métier. Jusqu'à présent, mes notes sont majoritairement excellentes.",
            [
                "Angular", "Bash", "Capacitor", "CSharp", "CSS", "Docker", "ExpressJS", "Figma", "HTML", "Ionic", "Java", "JavaScript", "MongoDB", "MySQL"
            ]
        ),
        new Experience(
            "Préapprenti développeur d'applications CFC",
            2021,
            2022,
            {
                name: "EPCA - École professionnelle du Chablais",
                address: "Avenue des Marronniers",
                addressNumber: 3,
                npa: 1860,
                city: "Aigle"
            },
            "J'ai suivi des cours de français, de mathématiques, d'informatique, pour me préparer à ma future formation.",
            [
                "PowerPoint", "Word"
            ]
        ),
        new Experience(
            "Étudiant",
            2018,
            2021,
            {
                name: "Gymnase de Morges",
                address: "Avenue de Marcelin",
                addressNumber: 33,
                npa: 1110,
                city: "Morges"
            },
            "En attendant une opportunité professionnelle, j'ai fait 3 ans \
            de gymnase où j'ai acquis de nombeuses connaissances générales, \
            construit de nouvelles relations. Cela m'a permis de rester proactif.",
            []
        ),
        new Experience(
            "Élève",
            null,
            2018,
            {
                name: "Établissement primaire et secondaire Apples-Bière et environs",
                address: "Chemin des Collèges",
                addressNumber: null,
                npa: 1143,
                city: "Apples"
            },
            "J'ai suivi mon école obligatoire sans encombre, avec de bonnes moyennes tout du long. J'ai achevé mon école obligatore en voie pré-gymnasiale.",
            []
        )
    ];

    getProfessionalExperiences(): Experience[]
    {
        return this.professionalExperiences;
    }

    getScholarExperiences(): Experience[]
    {
        return this.scholarExperiences;
    }
}