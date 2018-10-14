import { Injectable } from '@angular/core';

import { CustomPoll } from '../models/poll';
import { HttpClient } from '@angular/common/http';

import { Entity } from '../models/entity';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})

export class EntityService {

  readonly URL_API = 'http://localhost:8080/api/entity';

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
    let newEntity = new Entity(entity.name,entity.address,entity.email,
                              entity.icon,entity.description, this.events);
                              
    return this.http.post(this.URL_API, newEntity);
  }

  updateEntity(entity: Entity) {
   return this.http.put(this.URL_API + `/${entity.entityID}`, entity);
 }

  deleteEntity(id: string) {
   return this.http.delete(this.URL_API + `/${id}`);
 }

}
