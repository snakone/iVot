import { Injectable } from '@angular/core';

import { Poll } from '../models/poll';
import { HttpClient } from '@angular/common/http';

import { Entity } from '../models/entity';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EntityService {

  readonly URL_API = 'https://ivotapp.herokuapp.com/organizations';

  events: Event[]=[];
  entityList: Entity[];
  selectedEntity: Entity;

  constructor(private http: HttpClient) {
    this.selectedEntity = <Entity>{};
   }

  getEntities() {
    return this.http.get(this.URL_API);
  }

  addEntity(entity: Entity) {
    let newEntity = new Entity(entity.name,entity.email,entity.icon,
                              entity.description);

    return this.http.post(this.URL_API, newEntity);
  }

  updateEntity(entity: Entity) {
   return this.http.put(this.URL_API + `/${entity.id}`, entity);
 }

  deleteEntity(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

}
