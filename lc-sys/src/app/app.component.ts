import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./component/menu/menu.component";
import { FooterComponent } from "./component/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, MenuComponent, FooterComponent]
})
export class AppComponent {
  title = 'Grupo LC';
}
