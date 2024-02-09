import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BassComponent } from './bass/bass.component';
import { DrumComponent } from './drum/drum.component';
import { GuitarComponent } from './guitar/guitar.component';  /*I switched these from guitar down, to guitar up and it worked. Part 21:00 of video*/

const routes: Routes = [

  {
    path: '',
    component: BassComponent,
    pathMatch: 'full'
  },
  {
    path: 'guitar',
    component: GuitarComponent,
    pathMatch: 'full'
  },
  {
    path: 'drum',
    component: DrumComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
