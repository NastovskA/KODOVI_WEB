import { Component, OnInit, Input} from '@angular/core';
import { Artist } from './artist';
import { NgIf, NgClass} from '@angular/common';

@Component({
  selector: 'artist-comp',
  imports:[NgIf, NgClass],
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  @Input()
  artist : Artist | undefined;

  @Input()
  indeks : number | undefined;

  ngOnInit() {
  }

}
