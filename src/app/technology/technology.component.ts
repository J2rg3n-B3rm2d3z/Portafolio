import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tecnology, TypeTec } from '../_models/Tecnology';
import { NgFor, NgIf } from '@angular/common';
import { TechnologyService } from '../_services/technology.service';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent implements OnInit {
  isLoading = false;
  typetecs = {} as TypeTec[]

  constructor(private tittleService: Title, private technologyService: TechnologyService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Tecnologías');

  }
  ngOnInit(): void {
    this.isLoading = true;
    this.technologyService.GetTechnology().subscribe(
      tech => {
        this.typetecs = tech;
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar los datos', error);
        this.isLoading = true;
      }
    )
  }
}
