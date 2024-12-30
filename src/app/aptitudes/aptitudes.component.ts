import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { Aptitude } from '../models/aptitude';
import { AptitudesService } from '../services/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './aptitudes.component.html',
  styleUrl: './aptitudes.component.scss'
})
export class AptitudesComponent implements OnInit
{
    aptitudes: Aptitude[] = [];

    constructor(private AptitudesService: AptitudesService){};

    ngOnInit(): void
    {
        this.aptitudes = this.AptitudesService.getAptitudes();
    }
}
