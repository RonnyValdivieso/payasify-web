import { IAward } from "../interfaces/IAward";
import { INominated } from "../interfaces/Inominated";

export class Nominated implements INominated {
	id: string;
	fullName: string;
	votes: number;
	award?: IAward;

	constructor(id: string, fullName: string, votes: number) {
		this.id = id;
		this.fullName = fullName;
		this.votes = votes;
	}
}
