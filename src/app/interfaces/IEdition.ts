import { INominated } from "./Inominated";

export interface IEdition {
	id: number;
	name: string;
	isClosed: boolean;
	nominees: INominated[];
}