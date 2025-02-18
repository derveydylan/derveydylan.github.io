import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JourneyComponent } from './journey/journey.component';
import { BioComponent } from './bio/bio.component';

export const routes: Routes =
[
    {path: "", component: HomeComponent},

    {path: "aptitudes", component: AptitudesComponent},
    {path: "gallery", component: GalleryComponent},
    {path: "journey", component: JourneyComponent},
    {path: "bio", component: BioComponent},

    {path: "**", redirectTo: ""}
];
