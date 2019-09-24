import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule { }
