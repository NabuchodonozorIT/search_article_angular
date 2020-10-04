import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  @Input() public promo: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
