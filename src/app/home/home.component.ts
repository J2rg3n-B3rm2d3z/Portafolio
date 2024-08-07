import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, NgFor, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  habilities = ['Trabajo en equipo', 'Liderazgo', 'Sentido de responsabilidad', 'Disciplina', 'Creatividad', 'Rápido aprendizaje', 'Comunicación asertiva', 'Pensamiento crítico, analítico y resolutivo'];
  spanish = ['Escritura: Nativo', 'Lectura: Nativo', 'Conversacional: Nativo'];
  english = ['Escritura: Básico', 'Lectura: Intermedio', 'Conversacional: Básico'];
  
  hoveredItem: (string | null) = null;
  featuredProject = {} as Project;

  isHovered = false;

  constructor(private tittleService: Title, private projectService: ProjectsService, private renderer: Renderer2) {
    this.tittleService.setTitle('Jurgen Bermúdez - Inicio');
  }
  
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(2); //Put the Id from the featured project
  }

  //Code to download the resume
  DownloadFile() {
      const link = this.renderer.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href','../../assets/Curriculum.pdf');
      link.setAttribute('download','Curriculum.pdf');
      link.click();
      link.remove();
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }

}