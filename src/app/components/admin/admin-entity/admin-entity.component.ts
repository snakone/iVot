import { Component, OnInit } from '@angular/core';

import { EntityService } from '../../../services/entity.service';  // Entity Service
import { Entity } from '../../../models/entity';  // Entity Model

import { ProfileService } from '../../../services/profile.service';  // Entity Service

import { ToastrService } from 'ngx-toastr';  // Toastr

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'app-admin-Entity',
  templateUrl: './admin-Entity.component.html',
  styleUrls: ['./admin-Entity.component.css']
})

export class AdminEntityComponent implements OnInit {

  entityList: Entity[];

  constructor(public entityService: EntityService,
              public profileService: ProfileService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getEntity();  // Get Entity at the start
  }

  getEntity(){
     this.entityService.getEntities()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
      this.entityList = res as Entity[];  // Response as Service Entity = List
    });
  }

  addEntity(form: NgForm){
    if (form.value.id) {  // Already Entity ID? -> Update
      console.log(form.value)
      this.entityService.updateEntity(form.value)  // Update Entity with Form Values
       .subscribe (res => {  // Subscribe to the Server Response
         this.toastr.info('Bien!', 'Entidad Actualizada!');
         this.resetForm(form);  // Reset Form
         this.getEntity();
       })
    }
    else {  // Not Entity ID? Oh, New Entity?
      this.entityService.addEntity(form.value)  // Add Entity with Form Values
      .subscribe(res => {  // Subscribe to the Server Response
        this.toastr.success('Genial!', 'Entidad Añadida');
        this.resetForm(form);  // Reset Form
        this.getEntity();
      });
    }
  }

  updateEntity(Entity: Entity){  // NEW Entity Object with the Entity -> selected Entity
    this.entityService.selectedEntity = Object.assign({}, Entity);;
  }

  deleteEntity(id: string){  // Need the Entity ID

    if(confirm("Are You sure?")){
    this.entityService.deleteEntity(id)  // Delete Entity by ID
     .subscribe( res => {  // Subscribe to the Server Response
        this.getEntity();  // Once Deleted, Update the Entity List
        this.toastr.warning('Oh!', 'Entidad Eliminada');
     });
    }
  }

  resetForm($event,form?: NgForm){
    event.preventDefault();
    if (form) form.reset();  // Form?
    this.entityService.selectedEntity = <Entity>{};  // On Reset, New Entity
  }

}
