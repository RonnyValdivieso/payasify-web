import { IAward } from "./IAward";

export interface INominated {
	id: string;
	fullName: string;
	votes: number;
	award?: IAward;
}
