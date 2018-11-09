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

  selectAll: boolean = false;

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

  isAnyRowSelected() {
    return !(this.baseService.customers.find((obj) => { return obj.selected }));
  }

  generateInvoice() {
    this.router.navigate(['invoice']);
  }

  selectAllRows() {
    this.selectAll = !this.selectAll;

    this.baseService.customers.forEach((obj) => {
      obj.selected = this.selectAll;
    });
    
  }

}
