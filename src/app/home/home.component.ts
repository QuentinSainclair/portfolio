import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    let text = document.getElementById('textHome');
    let barre = document.getElementById('barre');
    let photo = document.getElementById('photo');

    const TL1 = gsap.timeline({paused: true});

    TL1
      .from(text, { x: -100, opacity: 0, duration: 0.5,})
      .from(barre, { y: 100, opacity: 0, duration: 0.5,})
      .from(photo, { x: 100, opacity: 0, duration: 0.5,});

    TL1.play();
  }
}
