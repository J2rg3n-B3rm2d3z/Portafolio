import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

  constructor(private tittleService: Title){
    this.tittleService.setTitle('Jurgen Bermúdez - Tecnologías');

  }
}
