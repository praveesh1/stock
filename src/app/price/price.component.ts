import { Component, OnInit } from '@angular/core';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private priceservice: PriceService) { }

  ngOnInit() {
  }

}
