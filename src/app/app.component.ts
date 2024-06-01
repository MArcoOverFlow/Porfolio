import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pantalla2Component } from "./components/pantalla2/pantalla2.component";
import { Pantalla3Component } from "./components/pantalla3/pantalla3.component";
import { Pantalla1Component } from "./components/pantalla1/pantalla1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Pantalla2Component, Pantalla3Component, Pantalla1Component]
})
export class AppComponent {
  title = 'act1DPD';
}
