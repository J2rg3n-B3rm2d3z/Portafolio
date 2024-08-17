import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { collection, collectionData, Firestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private firestore: Firestore) { }

  GetTags():  Observable<Tag[]> { //Get al the tags
    const tags = collection(this.firestore, 'Tags');
    
    return collectionData(tags,{idField:'id'}) as Observable<Tag[]>;
  }
}
