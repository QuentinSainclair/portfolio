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
      this.fillColor = 'black';
    }, 2100);
  }
}
