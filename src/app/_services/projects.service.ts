import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] =
  [
    { id: 0, name: "Ejemplo de proyecto de Python", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.PYTHON]},
    { id: 1, name: "Ejemplo de proyecto de Angular", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.ANGULAR,Tag.TYPESCRIPT]},
    { id: 2, name: "Ejemplo de proyecto de .NET", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.ASPNET,Tag.CSHARP]},
    { id: 3, name: "Ejemplo de proyecto de Web API", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.ASPNET,Tag.CSHARP]},
    { id: 4, name: "Ejemplo de proyecto de Chrome Extension", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.ANGULAR,Tag.PYTHON]},
    { id: 5, name: "Aplicacion Movil", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectlink: "https://github.com/J2rg3n-B3rm2d3z", summary: "Proyecto de prueba", description: "Esta es una descripcion", tags:[Tag.NODEJS,Tag.PYTHON]}
  ]

  constructor() { }

  GetProjects() : Project[]{
    return this.projects;
  }

  GetProjectById(id:number = 0): Project{
    const project = this.projects.find( project => project.id === id);
    
    if (project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project
  }

  GetProjectByFilter(filterTags:Tag[]): Project[]{
    const filteredProjects: Project[] = [];
    
    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      })

      if (foundAll){
        filteredProjects.push(project);
      }

    })

    return filteredProjects;
  }


}
