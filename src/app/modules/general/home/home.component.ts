import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Tribe } from '../../application/models/tribe';
import { TRIBES } from '../../../services/mock-tribes';
import { TribesService } from '../../../services/tribes.service';
import { CarouselComponent } from 'ngx-carousel-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  userFirstname = 'Christophe';
  tribes: Tribe[] = null;

  constructor(private tribesService: TribesService) { }

  @ViewChild('tribesCarousel', {static: false}) tribesCarousel: CarouselComponent;

  ngOnInit(): void {
    this.getTribes();
  }

  getTribes(): void {
    this.tribes = this.tribesService.getTribes();
  }

  slideNext() {
    this.tribesCarousel.slideNext();
  }

  slidePrevious() {
    this.tribesCarousel.slidePrev();
  }
}
