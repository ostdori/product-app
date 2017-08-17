import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({

	declarations:[

		ProductListComponent,
		ProductDetailComponent,
		ProductFilterPipe
		// StarComponent
	],
	imports:[
		SharedModule,
		// FormsModule,
		// CommonModule,
		RouterModule.forChild([
			 	{path: 'products',component: ProductListComponent},
  			 	{path: 'products/:id',component:ProductDetailComponent},
			])
	],
	providers:[ProductService]
})

export class ProductModule{}