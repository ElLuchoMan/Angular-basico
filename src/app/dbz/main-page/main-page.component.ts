import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1200
  }
  constructor() {

  }
}
