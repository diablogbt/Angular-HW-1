import { Component, OnInit} from '@angular/core';
import { HeroList, Hero } from './herolist';

@Component({
  selector: 'app-hellw',
  templateUrl: './helloworldc.component.html',
  styleUrls: ['./helloworldc.component.css']
})
export class HellComponent implements OnInit {

  constructor() {}

  hero: Hero = {
    id: 1,
    noteword: 'Startpoint'
  };
  cnt = 1;

  heroList = HeroList;

  ngOnInit() {

  }
}

