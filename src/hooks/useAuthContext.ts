import {useContext} from "react";
import {Context as AuthContext} from "../context";

export function useAuthContext() {
	return useContext(AuthContext);
}

export function useIsAuthenticated() {
	const {state: {state}} = useAuthContext();
	return !!state;
};
