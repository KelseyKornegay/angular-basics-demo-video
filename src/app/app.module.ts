import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GuitarComponent } from './guitar/guitar.component';
import { DrumComponent } from './drum/drum.component';
import { BassComponent } from './bass/bass.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuitarComponent,
    DrumComponent,
    BassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
