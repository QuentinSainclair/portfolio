import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  imgFrontDesktop: string;
  imgBackDesktop: string;
  imgMultitache: string;
  constructor() {
    this.imgFrontDesktop = 'assets/Images/front_desktop.png';
    this.imgBackDesktop = 'assets/Images/back_desktop.png';
    this.imgMultitache = 'assets/Images/multitache.svg'
  }
}
