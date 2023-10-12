import {AuthActions} from "../../actions";
import {User} from "../../types";

export interface Action {
	type: AuthActions;
	payload: User | undefined;
}

export interface State {
	user: User | undefined;
}

