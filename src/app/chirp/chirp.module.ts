import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { chirpComponent } from './chirp.component';
import { chirpFormComponent } from './form/chirp-form/chirp-form.component';
import { ChirpService } from './service/chirp.service';

@NgModule({
  declarations: [chirpComponent, chirpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [chirpComponent, chirpFormComponent],
  providers: [ChirpService]
})
export class ChirpModule { }
