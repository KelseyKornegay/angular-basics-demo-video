import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrl: './guitar.component.scss'
})
export class GuitarComponent {



    constructor(public dataService: DataService) { }

  changeName() {
    this.dataService.name = 'Kornegay'
  }
}
