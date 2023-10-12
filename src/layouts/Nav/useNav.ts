import {useAuthContext} from "../../hooks";
import {useCallback} from "react";
import {CreateReadUpdateDeleteEnum} from "../../enums";

export function useNav() {
	const context = useAuthContext();
	const handleLogout = useCallback((e) => {
		e.preventDefault();
		context.dispatch({
			type: CreateReadUpdateDeleteEnum.DELETE,
			payload: undefined,
		});
	}, [context]);
	return {
		showLogoutButton: !!context.user,
		handleLogout,
	};
}
