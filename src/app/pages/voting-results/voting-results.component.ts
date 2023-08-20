import { Component, Input, OnInit } from '@angular/core';
import { INominated } from 'src/app/interfaces/Inominated';
import { NominatedService } from 'src/app/services/nominated.service';

@Component({
	selector: 'app-voting-results',
	templateUrl: './voting-results.component.html',
	styleUrls: ['./voting-results.component.css']
})
export class VotingResultsComponent implements OnInit {

	@Input() nominees: Array<INominated> = [];

	// Table
	displayedColumns: Array<string> = ["fullName", "award"]

	constructor(private nominatedService: NominatedService) { }

	ngOnInit(): void {
		// this.getNominees();
	}

	getNominees(): Promise<void> {
		return new Promise((resolve) => {
			this.nominatedService.getNominees()
				.subscribe({
					next: (data: Array<INominated>) => {
						this.nominees = data;
					}
				});
		});
	}

}
