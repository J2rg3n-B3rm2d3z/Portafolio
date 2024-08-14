import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Homeinf, Lenguage } from '../_models/Home';
import { HomeinfService } from '../_services/homeinf.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, NgFor, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homeinf = {} as Homeinf;
  hoveredItem: (string | null) = null;
  featuredProject = {} as Project;
  isHovered = false;

  constructor(private tittleService: Title, private projectService: ProjectsService, private renderer: Renderer2, private homeinfService: HomeinfService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Inicio');
  }

  ngOnInit(): void {
    this.homeinf = this.homeinfService.GetHomeinf();
    this.featuredProject = this.projectService.GetProjectById(this.homeinf.featureproject); //Put the Id from the featured project
  }

  //Code to download the resume
  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Curriculum.pdf');
    link.setAttribute('download', 'Curriculum.pdf');
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