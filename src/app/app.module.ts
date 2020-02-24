import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';

import { NavbarModule } from './navbar/navbar.module';
import { ChirpModule } from './chirp/chirp.module';
import { TimelineModule } from './timeline/timeline.module';

import { AppComponent } from './app.component';

import { entityConfig } from './shared/config/entity-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NavbarModule,
    ChirpModule,
    TimelineModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
