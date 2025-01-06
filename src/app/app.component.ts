import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { NavbarService } from './_services/navbar.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  animationRefresh = 'slide-up';

  constructor(private navbarService: NavbarService, private router: Router) {
    this.navbarService.selectedOption.subscribe(newOption => { // From navbarService observe the value of selectedOption that use to change the animation refresh.
      this.animationRefresh = this.getAnimationForOption(newOption); // Update the animation Refresh
    })
  }

  getAnimationForOption(newOption: string): string {

    switch (this.router.url) { // Depend of the route.

      case '/inicio': {
        return 'slide-right'
      }

      case '/educacion': {

        switch (newOption) { // Depend of the selectedOption.
          case 'home': {
            return 'slide-left'
          }
          default: {
            return 'slide-right'
          }
        }
      }

      case '/tecnologias': {
        switch (newOption) {
          case 'contact': {
            return 'slide-right'
          }
          case 'portfolio': {
            return 'slide-right'
          }
          default: {
            return 'slide-left'
          }
        }
      }

      case '/portafolio': {
        switch (newOption) {
          case 'contact': {
            return 'slide-right'
          }
          default: {
            return 'slide-left'
          }
        }
      }

      case '/contactos': {
        return 'slide-left'
      }

      default: {
        return 'slide-up'
      }
    }
  }

  ngOnInit(): void {

  }

}
