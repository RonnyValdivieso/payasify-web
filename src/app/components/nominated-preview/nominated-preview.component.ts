import { Component, Input, OnInit } from '@angular/core';
import { INominated } from 'src/app/interfaces/Inominated';
import { Nominated } from 'src/app/models/nominated';

@Component({
  selector: 'app-nominated-preview',
  templateUrl: './nominated-preview.component.html',
  styleUrls: ['./nominated-preview.component.css']
})
export class NominatedPreviewComponent implements OnInit {

  @Input('nominated') nominated!: INominated;
  @Input('showAward') showAward: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
