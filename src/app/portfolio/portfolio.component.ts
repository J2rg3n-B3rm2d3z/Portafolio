import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { NgFor, NgIf } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag, TagHtml } from '../_models/Tag';
import { TagService } from '../_services/tag.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, FormsModule, CollapseModule, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  tags = {} as Tag[];

  isLoading: boolean = false;
  isCollapse: boolean = true;
  tagshtml: TagHtml[] = [];
  filtering: boolean = false;

  constructor(private tittleService: Title, private projectService: ProjectsService, private tagService: TagService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Portafolio');
  }

  ngOnInit(): void {

    this.isLoading = true;

    this.tagService.GetTags().subscribe(
      tags => {
        
        this.tags = tags;

        this.tags.forEach(element => {
          element.isActivated = false;
        });

        let count = 0;

        this.tagshtml = this.tags.reduce((acc, tagss) => {
          const existingGroup = acc.find(group => group.type === tagss.type);
          if (existingGroup) {
            existingGroup.tags.push(tagss);
          } else {
            acc.push({ id: count, type: tagss.type, tags: [tagss] });
            count = count + 1;
          }
          return acc;
        }, [] as TagHtml[]);

        this.projectService.GetProjects().subscribe(projects => {

          this.projects = projects;
          this.projects = this.OrganizeProjects(this.projects, this.tags);
          this.isLoading = false;

        })

      }, error => {
        console.error('Error al cargar los datos', error);
      }
    )
  }

  Filter() {
    let filterTags: Tag[] = [];
    if (!this.isLoading) {
      for (let index = 0; index < this.tags.length; index++) {
        if (this.tags[index].isActivated) {
          filterTags.push(this.tags[index])
        }
      }

      for (let index = 0; index < this.tags.length; index++) {
        if (this.tags[index].isActivated) {
          this.filtering = true;
          break;
        } else {
          this.filtering = false;
        }
      }

      if (this.filtering) {
        this.projectService.GetProjectByFilter(filterTags).subscribe(projects => {
          this.projects = projects;
          this.projects = this.OrganizeProjects(this.projects, this.tags);
        })
      } else {
        this.projectService.GetProjects().subscribe(projects => {
          this.projects = projects;
          this.projects = this.OrganizeProjects(this.projects, this.tags);
          this.isCollapse = true;
        })
      }
    }
  }

  //Reset all.

  ResetFilters() {

    if (!this.isLoading) {

      for (let index = 0; index < this.tags.length; index++) {
        this.tags[index].isActivated = false;
      }

      this.filtering = false;

      this.projectService.GetProjects().subscribe(projects => {
        this.projects = projects;
        this.projects = this.OrganizeProjects(this.projects, this.tags);
        this.isCollapse = true;
      })
    }
  }

  private OrganizeProjects(projects: Project[], tags: Tag[]): Project[] {
    projects.sort((a, b) => { return a.id - b.id });
    projects.forEach(project => {
      project.tags = tags.filter(tag => project.tagKey.includes(tag.key))
        .sort((a, b) => b.key.length - a.key.length);
    });
    return projects;
  }

}