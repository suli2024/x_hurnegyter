/*
* File: app.component.ts
* Author: Erős István
* Copyright: 2024, Erős István
* Group: Szoft X
* Date: 2024-12-04
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NegyszogComponent } from "./negyszog/negyszog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NegyszogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hurnegyter';
}
