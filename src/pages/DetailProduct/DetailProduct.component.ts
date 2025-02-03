import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-DetailProduct',
  templateUrl: './DetailProduct.component.html',
})
export class DetailProduct implements OnInit {
  constructor(routes: ActivatedRoute) {
    console.log('routes : ', routes.snapshot.paramMap.get('id'));
    console.log('routes : ');
  }

  ngOnInit() {}
}
