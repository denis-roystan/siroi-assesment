import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	HomeComponent,
	InvoiceComponent
} from './components/index'

export const appRoutes: Routes  = [
	{ path: '', component: HomeComponent,
		children: [
			{ path: 'invoice', component: InvoiceComponent }
		]
	},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
