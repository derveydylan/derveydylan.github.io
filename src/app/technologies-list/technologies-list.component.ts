import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies-list',
  imports: [],
  templateUrl: './technologies-list.component.html',
  styleUrl: './technologies-list.component.scss'
})
export class TechnologiesListComponent
{
    @Input() technologies!: string[];

    @Input() box?: boolean = false;
}
