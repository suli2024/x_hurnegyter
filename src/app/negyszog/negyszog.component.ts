/*
* File: negyszog.component.ts
* Author: Erős István
* Copyright: 2024, Erős István
* Group: Szoft X
* Date: 2024-12-04
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-negyszog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './negyszog.component.html',
  styleUrl: './negyszog.component.css'
})
export class NegyszogComponent {
  aside !: number;
  bside !: number;
  cside !: number;
  dside !: number;
  area !: number;

  startCalc() {
      const s = (this.aside + this.bside + this.cside + this.dside) /2;
      this.area = Math.sqrt( (s - this.aside) * (s - this.bside) * (s - this.cside) * (s - this.dside));
  }
}
