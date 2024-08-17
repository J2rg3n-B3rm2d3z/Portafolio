import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { collection, collectionData, doc, Firestore, query, where } from '@angular/fire/firestore';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //This is the projects.
  //Image save in postimage 1280x720s

  constructor(private firestore: Firestore) {
  }

  GetProjects(): Observable<Project[]> {
    const projects = collection(this.firestore, 'Projects');

    return collectionData(projects, { idField: 'id' }) as Observable<Project[]>;
  }

  GetProjectById(id: number = 0): Observable<Project[]> {
    const project = collection(this.firestore, 'Projects');
    const q = query(project, where('id', '==', id));
    return collectionData(q, { idField: 'id' }) as Observable<Project[]>;
  }

  GetProjectByFilter(filterTags: Tag[]): Observable<Project[]> {
    const projects = collection(this.firestore, 'Projects');
    const q = query(projects, where('tagKey', 'array-contains-any', filterTags.map(tag => tag.key)));
    return collectionData(q, { idField: 'id' }) as Observable<Project[]>;
  }

  // GetProjectByFilter(filterTags: Tag[]): Project[] {
  //   const filteredProjects: Project[] = []; //Empty Projects

  //   this.projects.forEach(function (project) { //Call a anonymous function for each project.
  //     let foundAll = true;

  //     filterTags.forEach(function (filterTag) { //Call a anonymous function for each tag.
  //       if (project.tags.includes(filterTag) == false) { //If tag is no found in the project, change the state to false.
  //         foundAll = false;
  //       }
  //     })

  //     if (foundAll) { //If state true push to de filtered projects.
  //       filteredProjects.push(project);
  //     }

  //   })

  //   return filteredProjects;
  // }


}
