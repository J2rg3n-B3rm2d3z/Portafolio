import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tecnology, TypeTec } from '../_models/Tecnology';
import { NgFor } from '@angular/common';
import { TechnologyService } from '../_services/technology.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgFor],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
  typetecs = {} as TypeTec[]

  constructor(private tittleService: Title, private technologyService: TechnologyService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Tecnologías');

  }
  ngOnInit(): void {
    this.typetecs = this.technologyService.GetTechnology();
  }
}
