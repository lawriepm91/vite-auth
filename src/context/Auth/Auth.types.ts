import {User as UserType} from "../../types";

export type State = UserType | undefined;

export interface Context {
	state: State;
	dispatch(): void;
}
