import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEdition } from 'src/app/interfaces/IEdition';
import { NominatedService } from 'src/app/services/nominated.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	editions: Array<IEdition> = [];

	constructor(
		private _nominatedService: NominatedService,
		private _router: Router
	) { }

	ngOnInit(): void {
		this.getEditions();
	}

	getEditions(): void {
		this._nominatedService.getEditions()
			.subscribe({
				next: (data: Array<IEdition>) => {
					this.editions = data;
				}
			});
	}

	goToEdition(editionId: number): void {
		this._router.navigate([`edition/${editionId}`]);
	}

}
