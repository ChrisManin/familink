import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Tribe } from './../../application/models/tribe';
import { TRIBES } from './../../../services/mock-tribes';

@Component({
  selector: 'app-detail-tribe',
  templateUrl: './detail-tribe.component.html',
  styleUrls: ['./detail-tribe.component.css']
})
export class DetailTribeComponent implements OnInit {

  tribes: Tribe[] = null;
  tribe: Tribe = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tribes = TRIBES;

    // Initialise la tribu à afficher en fonction de la sélection de l'utilisateur
    const id = +this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.tribes.length; i++) {
      if (this.tribes[i].id === id) {
        this.tribe = this.tribes[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }

}
