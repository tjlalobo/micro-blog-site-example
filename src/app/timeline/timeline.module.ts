import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';

import { ChirpModule } from '../chirp/chirp.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    ChirpModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
