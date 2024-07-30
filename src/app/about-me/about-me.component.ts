import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  
  constructor(private tittleService: Title){
    this.tittleService.setTitle('Jurgen Bermúdez - Acerca de mí');

  }
}
