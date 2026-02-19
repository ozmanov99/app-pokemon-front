import { Component, OnInit } from '@angular/core';
import { MascotService } from '../../services/mascot.service';

@Component({
  selector: 'app-pokemon-mascot',
  templateUrl: './pokemon-mascot.component.html',
  styleUrls: ['./pokemon-mascot.component.css'],
  standalone: false,
})
export class PokemonMascotComponent implements OnInit {

  message: string = ''; // bulle de dialogue

  constructor(private mascotService: MascotService) {}

  ngOnInit() {
    // Écoute les triggers depuis le service
    this.mascotService.jump$.subscribe(type => this.jump(type));
  }

  jump(type: string) {
    const mascotEl = document.querySelector('.mascot') as HTMLElement;
    if (!mascotEl) return;

    // Déclenche l'animation de saut
    mascotEl.classList.add('jump');

    // Message contextuel selon type de booster
    switch(type) {
      case 'Feu': this.message = 'Youpiiii un ami de type 🔥'; break;
      case 'Eau': this.message = 'Youpiiii un ami de type 💧'; break;
      case 'Électrik': this.message = 'Youpiiii un ami de type ⚡'; break;
      case 'Plante': this.message = 'Youpiiii un ami de type 🌿'; break;
      case 'Vol': this.message = 'Youpiiii un ami de type 🕊️'; break;
    }

    // Retirer animation et message après le saut
    setTimeout(() => {
      mascotEl.classList.remove('jump');
      this.message = '';
    }, 4000); // correspond à la durée jump
  }

  onClick() {
    const mascotEl = document.querySelector('.mascot') as HTMLElement;
    if (!mascotEl) return;

    // Petit shake au clic
    mascotEl.classList.add('shake');
    setTimeout(() => mascotEl.classList.remove('shake'), 500);
  }
}
