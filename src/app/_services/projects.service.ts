import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //This is the projects.
  //Image save in postimage 1280x720s

  constructor(private firestore: Firestore) {
  }

  GetProjects(): Observable<Project[]> { //Get all the projects
    const projects = collection(this.firestore, 'Projects');

    return collectionData(projects, { idField: 'id' }) as Observable<Project[]>;
  }

  GetProjectById(id: number = 0): Observable<Project[]> { //Get the projects by id
    const project = collection(this.firestore, 'Projects');
    const q = query(project, where('id', '==', id));
    return collectionData(q, { idField: 'id' }) as Observable<Project[]>;
  }

  GetProjectByFilter(filterTags: Tag[]): Observable<Project[]> { //Get the projects by tags
    const projects = collection(this.firestore, 'Projects');

    let q = query(projects);

    filterTags.forEach(tag => {
      q = query(q, where('tagKey', 'array-contains', tag.key));
    });
    
    return collectionData(q, { idField: 'id' }) as Observable<Project[]>;
  }
}
