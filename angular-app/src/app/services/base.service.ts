import { Injectable } from '@angular/core';
import { Customers } from '../constants/Customers';

@Injectable()
export class BaseService {

	customers: any;

  constructor() { }

  getJsonData() {
  	this.customers = Customers;
  }

}
