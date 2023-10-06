import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  urlImgLogo: string;
  constructor() {
    this.urlImgLogo = '/assets/Images/logoCouleur.png'
  }
  ngAfterViewInit() {
    let li = document.querySelectorAll('li');

    const TL1 = gsap.timeline({paused: true});

    TL1
      .from(li, { y: -50, opacity: 0, duration: 0.5, stagger: 0.1 })

    TL1.play();
  }
}
