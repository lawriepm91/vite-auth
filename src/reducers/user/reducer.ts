import * as Types from './reducer.types';
import {CreateReadUpdateDeleteEnum} from "../../enums";

export function userReducer(state: Types.State, action: Types.Action)  {
	const {type, payload} = action;

	switch (type) {
		case CreateReadUpdateDeleteEnum.CREATE:
			return payload;
		case CreateReadUpdateDeleteEnum.DELETE:
			return undefined;
		default:

	}
}
