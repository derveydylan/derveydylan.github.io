import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { Experience } from '../../models/experience';
import { ExperiencesService } from '../../services/experiences.service';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-journey',
  imports: [PageTitleComponent, ExperienceComponent],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent
{
    professionalExperiences: Experience[] = [];
    scholarExperiences: Experience[] = [];

    constructor(private ExperiencesService: ExperiencesService){};

    ngOnInit(): void
    {
        this.professionalExperiences = this.ExperiencesService.getProfessionalExperiences();
        this.scholarExperiences = this.ExperiencesService.getScholarExperiences();
    }
}
