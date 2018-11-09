import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public baseService: BaseService,
  	public router: Router) { }

  ngOnInit() {
  	this.baseService.getJsonData();
  }

  ngAfterViewInit() {

  }

  toggleRowSelect(index) {
  	this.baseService.customers[index].selected = !this.baseService.customers[index].selected;
  }

  generateInvoice() {
  	this.router.navigate(['invoice'])
  }

}
