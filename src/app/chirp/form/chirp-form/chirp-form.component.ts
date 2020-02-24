import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { UUID } from 'angular2-uuid';

import { Chirp } from '../../../shared/models/chirp';
import { ChirpService } from '../../service/chirp.service';

@Component({
  selector: 'app-chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class chirpFormComponent implements OnInit {

  chirpForm = new FormGroup({
    comment: new FormControl()
  });

  constructor(private chirpService: ChirpService) { }

  ngOnInit() {
  }

  add(): void {
    const chirp: Chirp = {
      id: UUID.UUID(),
      author: "Joe Bloggs",
      comment: this.chirpForm.get('comment').value
    }

    this.chirpService.add(chirp);
    this.chirpForm.get('comment').setValue('');
  }

}
