import { Injectable } from '@angular/core';

@Injectable()
export class PriceService {

  constructor() { }
  getPrice(): void{
       alert("Price Function invoked");
    }
}
