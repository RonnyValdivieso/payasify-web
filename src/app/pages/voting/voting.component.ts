import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEdition } from 'src/app/interfaces/IEdition';
import { INominated } from 'src/app/interfaces/Inominated';
import { NominatedService } from 'src/app/services/nominated.service';

@Component({
	selector: 'app-voting',
	templateUrl: './voting.component.html',
	styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

	editionId: number = 0;
	edition!: IEdition;
	nominees: Array<INominated> = [];
	votedId: string = '';
	hasVoted: boolean = false;

	constructor(
		private _route: ActivatedRoute,
		private _nominatedService: NominatedService
	) {
		this._route.params.subscribe(params => {
			this.editionId = params['id'];
		});
	}

	ngOnInit(): void {
		this._nominatedService.votedId.subscribe({
			next: (response) => {
				if (response) {
					this.hasVoted = true;
				}
			}
		});

		this.getEdition();
	}

	getEdition(): void {
		this._nominatedService.getEdition(this.editionId)
			.subscribe({
				next: (data: IEdition) => {
					this.edition = data;
				}
			});
	}

	vote(): void {
		this._nominatedService.vote(this.votedId);
	}

	getWinners(): Array<INominated> {
		return this.edition.nominees.filter(x => x.award);
	}

}
