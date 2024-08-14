import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  constructor(private navbarService: NavbarService){
  }

  optionSelected(option: string){ //Select the value from the nav that after use in app component.
    this.navbarService.selectedOption.next(option);
  }

}
