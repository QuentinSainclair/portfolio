import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  urlImg: string;
  constructor() {
    this.urlImg = 'assets/Images/chien.jpeg'
  }
}
