import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from "./modules/sidebar/sidebar.component";

declare var $:any;
declare function initPageProyectoTI([]):any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoti';

  constructor() {
    setTimeout(() => {
      initPageProyectoTI($);
    }, 50);
  }
}
