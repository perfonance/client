import {NgModule} from "@angular/core";

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  exports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule
  ]
})

export class MaterialModule {

}
