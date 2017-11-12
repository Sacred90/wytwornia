import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  title: string = 'My first AGM project';
  lat: number = 51.057347;
  lng: number = 17.220731;

  ngOnInit() {

  }

}
