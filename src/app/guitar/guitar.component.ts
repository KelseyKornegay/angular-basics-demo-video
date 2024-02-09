import { Component } from '@angular/core';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.scss'
})
export class GuitarComponent {

  name = 'Kelsey'


  changeName() {
    this.name = 'Kornegay'
  }
}
