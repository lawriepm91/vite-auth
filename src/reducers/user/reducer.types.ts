import {CreateReadUpdateDeleteEnum} from "../../enums";
import {User} from "../../types";

export interface Action {
	type: CreateReadUpdateDeleteEnum;
	payload: User | undefined;
}

export interface State {
	user: User | undefined;
}

