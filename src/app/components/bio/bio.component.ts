import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { PersonalQuoteComponent } from '../personal-quote/personal-quote.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { Characteristic } from '../../models/characteristic';
import { CharacteristicsService } from '../../services/characteristics.service';

@Component({
  selector: 'app-bio',
  imports: [
    PageTitleComponent,
    PersonalQuoteComponent,
    AvatarComponent
  ],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent
{
    readonly today: Date = new Date();
    readonly birthDate: Date = new Date("2003-09-04");

    age: number = this.today.getFullYear() - this.birthDate.getFullYear();
    characteristics: Characteristic[] = [];

    constructor(private CharacteristicsService: CharacteristicsService){};

    ngOnInit(): void
    {
        const month = this.today.getMonth() - this.birthDate.getMonth();

        if(month < 0 || (month === 0 &&
            this.today.getDate() < this.birthDate.getDate()))
        {
            this.age--;
        }

        this.characteristics = this.CharacteristicsService.getCharacteristics();
    }
}
