import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonalQuoteComponent } from '../personal-quote/personal-quote.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    PersonalQuoteComponent,
    AvatarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
