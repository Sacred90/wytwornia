import { Component, OnInit } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  private isOpen = true;

  ngOnInit() {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen
  }

}
