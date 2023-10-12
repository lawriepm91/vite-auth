import {User as UserType} from "../../types";

export type State = UserType | undefined;

export interface Context {
	user: State;
	dispatch(): void;
}
