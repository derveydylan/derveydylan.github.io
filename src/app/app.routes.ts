import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { JourneyComponent } from './components/journey/journey.component';
import { BioComponent } from './components/bio/bio.component';

export const routes: Routes =
[
    { path: "", component: HomeComponent },

    { path: "aptitudes", component: AptitudesComponent, title: "Aptitudes" },
    { path: "gallery", component: GalleryComponent, title: "Galerie" },
    { path: "journey", component: JourneyComponent, title: "Périple" },
    { path: "bio", component: BioComponent, title: "Biographie" },

    { path: "**", redirectTo: "" }
];
