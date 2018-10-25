import { Component, OnInit } from '@angular/core';

import { OrganizationService } from '../../../services/organization.service';  // Organization Service
import { Organization } from '../../../models/organization';  // Organization Model

import { ProfileService } from '../../../services/profile.service';  // Organization Service

import { ToastrService } from 'ngx-toastr';  // Toastr
import { MatDialog } from '@angular/material';  // Material Dialog

import { ConfirmComponent } from '../../../components/static/confirm/confirm.component';

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'admin-Organization',
  templateUrl: './admin-Organization.component.html',
  styleUrls: ['./admin-Organization.component.css']
})

export class AdminOrganizationComponent implements OnInit {

  organizations: Organization[];
  token: boolean = true;  // On Edit, Hide Auth0 Token Text Input

  constructor(public organizationService: OrganizationService,
              public profileService: ProfileService,
              private toastr: ToastrService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getOrganization();  // Get Organization at the start
  }

  getOrganization(){
     this.organizationService.getOrganizations()
     .subscribe(res => {
      this.organizations = res as Organization[];
    });
  }

  addOrganization(form: NgForm){
    if (form.value.id) {  // Already Organization ID? -> Update
      this.organizationService.updateOrganization(form.value)  // Update Organization with Form Values
       .subscribe (res => {
         this.toastr.info('Bien!', 'Entidad Actualizada!');
         this.resetForm(form);
         this.getOrganization();
       })
    }
    else {  // Not Organization ID? Oh, New Organization?
      form.value.icon = `assets/icons/${form.value.icon}.png`;  // Icon Converter
      this.organizationService.addOrganization(form.value)  // Add Organization with Form Values
      .subscribe(res => {
        this.toastr.success('Genial!', 'Entidad Añadida');
        this.resetForm(form);
        this.getOrganization();
      });
    }
  }

  updateOrganization(Organization: Organization){  // NEW Organization Object with the Organization
    this.organizationService.selectedOrganization = Object.assign({}, Organization);
    this.token = false;
  }

  deleteOrganization(id: string){
    const dialogRef = this.dialog.open(ConfirmComponent,{});  // New Dialog -> Confirm Dialog Component

    dialogRef.afterClosed().subscribe(result => { // After Dialog Closed
      if (result) {
          this.organizationService.deleteOrganization(id)  // Delete Organization by ID
           .subscribe( res => {
              this.getOrganization();  // Once Deleted, Update the Organization List
              this.toastr.warning('Oh!', 'Entidad Eliminada');
           });
        }  // End of If (result)
      });
  }

  resetForm($event, form?: NgForm){
    this.token = true;
    event.preventDefault();
    if (form) form.reset();  // Form?
    this.organizationService.selectedOrganization = <Organization>{};  // On Reset, New Organization
  }

}
