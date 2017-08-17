import {Component} from '@angular/core';


@Component ({
	selector: 'my-app',
	template:
	`<div>
		<nav class = 'navbar navbar-default'>
		<div class = 'container-fluid'>
			<a class="navbar-brand" [routerLink]="['']">{{pageTitle}}</a>
			<ul class = 'nav navbar-nav'>
				<li routerLinkActive="active">
					<a [routerLink] = "['/welcome']" >Home</a>
				</li>
				<li routerLinkActive="active">
					<a [routerLink] = "['/products']">Products</a>
				</li>
			</ul>
		</div>
		</nav>
		<div class = "container">
			<router-outlet></router-outlet>
		</div>
		</div>`
	// providers:[ProductService]
})

export class AppComponent{
	pageTitle: string = 'OurShop';
}

