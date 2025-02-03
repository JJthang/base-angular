import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-MainLayout',
  templateUrl: './MainLayout.component.html',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}
  btnClick = 1;
  onHandClick = () => {
    this.btnClick += 1;
  };

  ngOnInit() {}
}
