import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Organization } from '../../../models/organization';

import { UserService } from '../../../services/user.service';
import { OrganizationService } from '../../../services/organization.service';

import { ToastrService } from 'ngx-toastr';

import { User } from '../../../models/user';
import { MatDialog } from '@angular/material';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  selectedUser: User = <User>{};
  organizations: Organization[];

  constructor(private userService: UserService,
              private organizationService: OrganizationService,
              private toastr: ToastrService,
              public profile: ProfileService,
              public dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    this.organizationService.getOrganizations()
     .subscribe(res => {
       this.organizations = res as Organization[];
     });
  }

  addUser(form: NgForm){
    console.log(form.value)
    if (form.value.name == null || form.value.lastName == null ||
        form.value.address == null || form.value.email == null ||
        form.value.icon == null || form.value.organization == null) alert("Rellena el formulario")
      else {
        this.userService.addUser(form.value.organization.id, form.value)
         .subscribe(res => {
            this.toastr.success('Usuario Creado');
            this.dialog.closeAll();
            this.router.navigate(['/home']);
         })
      }
  }

  resetForm(event, form: NgForm){
   event.preventDefault();
   if (form != null) // Reset form if not empty and we add a empty Topic
     form.reset();
   }

}
