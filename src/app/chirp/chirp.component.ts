import { Component, Input, HostBinding, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Chirp } from '../shared/models/chirp';
import { ChirpService } from './service/chirp.service';

@Component({
  selector: 'app-chirp',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ],
  templateUrl: './chirp.component.html',
  styleUrls: ['./chirp.component.css']
})
export class chirpComponent implements OnInit {

  @Input() chirp: Chirp;

  isAdded: boolean;

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
    this.isAdded = false;
  }

  delete(chirp: Chirp): void {
    this.chirpService.delete(chirp);
    this.isAdded = !this.isAdded
  }

}
