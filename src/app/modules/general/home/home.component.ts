import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Tribe } from '../../application/models/tribe';
import { TRIBES } from '../../../services/mock-tribes';
import { TribesService } from '../../../services/tribes.service';
import { CarouselComponent } from 'ngx-carousel-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  userFirstname = 'Christophe';
  tribes: Tribe[] = null;

  constructor(private tribesService: TribesService, private router: Router) { }

  @ViewChild('tribesCarousel', {static: false}) tribesCarousel: CarouselComponent;

  ngOnInit(): void {
    this.getTribes();
  }

  // Récupération des tribus
  getTribes(): void {
    this.tribes = this.tribesService.getTribes();
  }

  // Commande 'next' du carrousel de tribus
  slideNext() {
    this.tribesCarousel.slideNext();
  }

  // Commande 'previous' du carrousel de tribus
  slidePrevious() {
    this.tribesCarousel.slidePrev();
  }

  selectTribe(tribe: Tribe): void {
    console.log('Vous avez sélectionné la tribu ' + tribe.name);
    const link = ['/tribe', tribe.id];
    this.router.navigate(link);
  }
}
