import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; 
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
// import { ParticlesModule } from 'angular-particle-updated';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RoundProgressModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }