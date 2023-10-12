import {useAuthContext} from "../../hooks";
import {useCallback} from "react";
import {AuthActions} from "../../actions";

export function useNav() {
	const context = useAuthContext();
	const handleLogout = useCallback((e) => {
		e.preventDefault();
		context.dispatch({
			type: AuthActions.LOGOUT,
			payload: undefined,
		});
	}, [context]);
	return {
		showLogoutButton: !!context.user,
		handleLogout,
	};
}
