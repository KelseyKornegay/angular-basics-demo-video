import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrl: './drum.component.scss'
})
export class DrumComponent {


constructor(dataService: DataService) { }

}
