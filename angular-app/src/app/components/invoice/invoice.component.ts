import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InvoiceComponent implements OnInit {

	items: any = [];
	grandTotal: number = 0;

  constructor(public router: Router,
  	public baseService: BaseService) { }

  ngOnInit() {
  	this.items = this.baseService.customers.filter((obj) => {
  		return obj.selected;
  	});

  	!(this.items.length > 0) && this.router.navigate(['']);

  	this.items.forEach((obj) => {
  		obj.tax_amount = this.getTaxAmount(obj);
  		obj.total = this.getTotal(obj);
  		this.grandTotal = this.grandTotal + parseFloat(obj.total);
  	});
  }

  ngAfterViewInit() {

  }

  routeToHome(event) {
  	this.router.navigate(['']);
  }

  getTaxAmount(obj) {
  	return ((6/100) * (obj.quantity * obj.unit_price)).toFixed(2);
  }

  getTotal(obj) {
  	return ((obj.quantity * obj.unit_price) + parseFloat(obj.tax_amount)).toFixed(2);
  }

}
