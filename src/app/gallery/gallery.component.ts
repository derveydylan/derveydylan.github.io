import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { TechnologiesListComponent } from '../technologies-list/technologies-list.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PageTitleComponent, TechnologiesListComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent
{
    projects: Project[] = [];

    constructor(private ProjectService: ProjectService){};

    ngOnInit(): void
    {
        this.projects = this.ProjectService.getProjects();
    }
}
