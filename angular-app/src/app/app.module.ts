import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';


// Route
import { routing, appRoutingProviders } from './app.route';

// Services
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
