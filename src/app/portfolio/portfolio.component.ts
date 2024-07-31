import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, FormsModule, CollapseModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapse: boolean = true;

  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;

  filtering: boolean = false;

  constructor(private tittleService: Title, private projectService: ProjectsService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Portafolio');

  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects(); //Get all the projects from services.
  }


  /*
    When select or change a tag throught the chechbox, it's call this function that call a function from service,
    giving it as parameters, the array of Tags, and return the projects whith the tags that checkbox is true.
    For each change this always array start empty, the Tags that is true push in the array of tags when execute the code.
    */

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON)
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP)
    }
    if (this.java) {
      filterTags.push(Tag.JAVA)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS)
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET)
    }
    if (this.react) {
      filterTags.push(Tag.REACT)
    }

    if (this.typescript || this.javascript || this.python || this.csharp ||
      this.java || this.angular || this.nodejs || this.aspnet || this.react) {
      this.filtering = true;
    } else {
      this.filtering = false; //This variable is for show reset button.
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags); //Get the list of projects.
  }

  //Reset all.

  ResetFilters() {
    this.typescript = false;
    this.javascript = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.angular = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}

//Probably, optimize the code.