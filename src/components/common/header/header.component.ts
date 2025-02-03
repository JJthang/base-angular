import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [FormsModule],
})
export class Header implements OnInit {
  thang = '';
  constructor() {}

  ngOnInit() {}
}
