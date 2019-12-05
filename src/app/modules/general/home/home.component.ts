import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Tribe } from '../../application/models/tribe';
import { TRIBES } from '../../../services/mock-tribes';
import { TribesService } from '../../../services/tribes.service';

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

  ngOnInit(): void {
    this.getTribes();
  }

  getTribes(): void {
    this.tribes = this.tribesService.getTribes();
  }
}
