import { Component, Input } from '@angular/core';
import { Experience } from '../../models/experience';
import { TechnologiesListComponent } from '../technologies-list/technologies-list.component';

@Component({
  selector: 'app-experience',
  imports: [TechnologiesListComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent
{
    @Input() experience!: Experience;

    date?: string;

    ngOnInit(): void
    {
        if(this.experience)
        {
            if(this.experience.startYear && !this.experience.endYear)
            {
                this.date = "Depuis " + this.experience.startYear;
            }

            else if(!this.experience.startYear && this.experience.endYear)
            {
                this.date = "Jusqu'en " + this.experience.endYear;
            }

            else if(this.experience.startYear === this.experience.endYear)
            {
                this.date = "En " + this.experience.startYear;
            }

            else
            {
                this.date = "De " + this.experience.startYear +
                    " à " + this.experience.endYear;
            }
        }
    }
}
