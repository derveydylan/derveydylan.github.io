import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent
{
    showMenu: boolean = false;
    menuButtonText: string = "Menu"

    toggleMenu(): void
    {
        const menu = document.getElementById("links");
        const menuIcon = document.getElementById("menu-icon");

        if(this.menuButtonText === "Menu")
        {
            this.menuButtonText = "Fermer";
        }

        else
        {
            this.menuButtonText = "Menu";
        }

        menuIcon?.classList.toggle("fa-bars");
        menuIcon?.classList.toggle("fa-xmark");

        menu?.classList.toggle("active-menu");
    }

    closeMenu(): void
    {
        const menu = document.getElementById("links");
        const menuIcon = document.getElementById("menu-icon");

        this.menuButtonText = "Menu";

        menuIcon?.classList.add("fa-bars");
        menuIcon?.classList.remove("fa-xmark");

        menu?.classList.remove("active-menu");
    }
}