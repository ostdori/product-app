import { Pipe,PipeTransform } from '@angular/core';

import {Products} from './product';


@Pipe({
	name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform{

	transform(value:Products[],filterBy:  string): Products[] {

		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		return  filterBy ? value.filter(( product : Products) =>
			product.productName.toLocaleLowerCase().indexOf(filterBy) > -1) : value;
	}
}