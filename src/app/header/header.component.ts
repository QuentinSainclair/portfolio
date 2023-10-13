import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  urlImgLogo: string;
  burgerMenuOpen: boolean = false;

  constructor() {
    this.urlImgLogo = '/assets/Images/logoCouleur.png';
  }

  ngAfterViewInit() {
    let liElements = document.querySelectorAll('li');
    let ulElements = document.querySelectorAll('ul');

    const TL1 = gsap.timeline({ paused: true });
    TL1.from(liElements, { y: -50, opacity: 0, duration: 0.5, stagger: 0.1 });
    TL1.play();

    let burgerMenu = document.getElementById('check');

    if (burgerMenu) {
      burgerMenu.addEventListener('click', () => {
        this.burgerMenuOpen = !this.burgerMenuOpen;
      });
    }

    liElements.forEach((li) => {
      li.addEventListener('click', () => {
        ulElements.forEach((ulElement) => {
          ulElement.addEventListener('click', () => {
            if (window.innerWidth < 1070) {
              // Décochez la case à cocher pour fermer le menu burger
              let checkElement = document.getElementById('check') as HTMLInputElement;
              if (checkElement) {
                checkElement.checked = false;
              }
            }
          });
        });
      });
    });
  }
}
