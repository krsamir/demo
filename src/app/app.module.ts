import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faSquare,
  faCheckSquare,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
      faBell
    );
  }
}
