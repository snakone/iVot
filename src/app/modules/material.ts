// Material Design Modules

import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatSidenavModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
            MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
            MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule,
            MatBadgeModule, MatExpansionModule, MatFormFieldModule,
            MatDatepickerModule, MatNativeDateModule],

  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
            MatMenuModule, MatSidenavModule, MatListModule, MatCardModule,
            MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule,
            MatBadgeModule, MatExpansionModule, MatFormFieldModule,
            MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule {

 }
