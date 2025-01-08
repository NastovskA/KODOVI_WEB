import { Component } from '@angular/core';
import {ARTISTS} from '../db-data';
import { ArtistComponent } from './artist/artist.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ArtistComponent,CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  artistList = ARTISTS;

}
