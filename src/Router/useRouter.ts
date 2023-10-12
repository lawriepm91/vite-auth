import {useIsAuthenticated} from "../hooks";
import {useMemo} from "react";
import {authenticatedRoutes, unAuthenticatedRoutes} from "./Router.constants";

export function useRouter() {
	const auth = useIsAuthenticated();
	const routes = useMemo(() => {
		return auth ? authenticatedRoutes : unAuthenticatedRoutes
	}, [auth]);
	return {
		routes,
	}
}
