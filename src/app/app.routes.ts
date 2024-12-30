import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';

export const routes: Routes =
[
    {path: "", component: HomeComponent},

    {path: "aptitudes", component: AptitudesComponent}
];
