import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import * as AOS from 'aos';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  imgFrontDesktop: string;
  imgBackDesktop: string;
  imgMultitache: string;
  imgTitle: string;
  imgToolsDesktop: string;
  constructor() {
    this.imgFrontDesktop = 'assets/Images/front_desktop.png';
    this.imgBackDesktop = 'assets/Images/back_desktop.png';
    this.imgMultitache = 'assets/Images/multitache.svg';
    this.imgTitle = 'assets/Images/Skills.png';
    this.imgToolsDesktop = 'assets/Images/tools_desktop.png';
  }

  ngOnInit() {
    AOS.init();
  }
  
  ngAfterViewInit() {
    let image = document.getElementById('imgMultitache');
    let texte = document.getElementById('textePresentationSkills');
    let imgSkillsFrontDesktop = document.getElementById('imgSkillsFrontDesktop');

    const TL1 = gsap.timeline({paused: true});

    TL1
      .from(image, { x: -100, opacity: 0, duration: 0.5,})
      .from(texte, { x: 100, opacity: 0, duration: 0.5,})
      .from(imgSkillsFrontDesktop, { y: 100, opacity: 0, duration: 0.5,})

    TL1.play();
  }
}
