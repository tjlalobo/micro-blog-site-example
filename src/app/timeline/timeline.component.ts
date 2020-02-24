import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Chirp } from '../shared/models/chirp';
import { ChirpService } from '../chirp/service/chirp.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  chirps$: Observable<Chirp[]>;

  constructor(private chirpService: ChirpService) { 
    this.chirps$ = this.chirpService.entities$;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.chirpService.getAll();
  }

}
