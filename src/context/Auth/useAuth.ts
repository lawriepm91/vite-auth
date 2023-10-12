import {useEffect, useMemo, useReducer} from "react";
import {userReducer} from "../../reducers";

export function useAuth() {
	const initializer = () => {
		return JSON.parse(localStorage.getItem("user")) || {user: undefined};
	};

	const [state, dispatch] = useReducer(userReducer, {
		user: undefined,
	}, initializer);

	const value = useMemo(() => ({
		...state,
		dispatch,
	}), [state, dispatch]);

	useEffect(() => {
		if (!state) {
			localStorage.removeItem("user");
			return;
		}

		localStorage.setItem("user", JSON.stringify(state));
	}, [state]);

	return {
		value,
	};
}
