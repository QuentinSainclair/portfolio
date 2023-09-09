import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {
  fillColor: string = 'none';

  ngAfterViewInit() {
    setTimeout(() => {
      this.fillColor = 'white';
    }, 1200);
    setTimeout(() => {
      this.hideSVG();
    }, 2000);
  }

  hideSVG() {
    let svg = document.getElementsByClassName('welcome')[0];
    svg.classList.add('removeSVG');
  }
}

