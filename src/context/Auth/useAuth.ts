import {useMemo, useReducer} from "react";
import {userReducer} from "../../reducers";

const initializer = initialState => {
	return initialState;
};

export function useAuth() {
	const [state, dispatch] = useReducer(userReducer, {
		state: undefined,
		dispatch: () => undefined,
	}, initializer);

	const value = useMemo(() => ({state, dispatch}), [state]);

	return {
		value,
	};
}
