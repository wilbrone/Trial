import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { NameComponent } from './components/name/name.component';


const appRoutes: Routes = [
	{ 
		path: '',
		redirectTo:'/names',
		pathMatch:'full'
		},
		{
			path:'names',
			component:NameComponent
		},
		{
			path:'detail/:name',
			component:DetailComponent
		},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);