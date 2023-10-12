import {useIsAuthenticated} from "../hooks";
import {useMemo} from "react";
import {authenticatedRoutes, unAuthenticatedRoutes} from "./App.constants";

export function useApp() {
	const auth = useIsAuthenticated();
	const routes = useMemo(() => {
		return auth ? authenticatedRoutes : unAuthenticatedRoutes
	}, [auth]);
	return {
		routes,
	}
}
