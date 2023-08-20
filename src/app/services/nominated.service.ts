import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { INominated } from '../interfaces/Inominated';
import { IEdition } from '../interfaces/IEdition';

@Injectable({
	providedIn: 'root'
})
export class NominatedService {

	votedId: BehaviorSubject<string | ''> = new BehaviorSubject('');

	constructor(private http: HttpClient) { }

	getNominees(): Observable<Array<INominated>> {
		return this.http.get("http://localhost:3000/nominees")
			.pipe(map((data: any) => {
				return data;
			}));
	}
	
	getEditions(): Observable<Array<IEdition>> {
		return this.http.get("http://localhost:3000/editions")
			.pipe(map((data: any) => {
				return data;
			}));
	}

	getEdition(editionId: number): Observable<IEdition> {
		return this.http.get("http://localhost:3000/editions")
			.pipe(map((data: any) => {
				const edition = data.find((x: any) => x.id == editionId);
				return edition;
			}));
	}

	getEditionNominees(editionId: number): Observable<Array<INominated>> {
		return this.http.get("http://localhost:3000/editions")
			.pipe(map((data: any) => {
				const edition = data.find((x: any) => x.id == editionId);
				return edition.nominees;
			}));
	}

	vote(value: string): void {
		this.votedId.next(value);
	}
	
}
