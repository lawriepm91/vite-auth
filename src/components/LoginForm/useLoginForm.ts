import {useCallback, useMemo} from "react";
import {useAuthContext} from "../../hooks";
import {AuthActions} from "../../actions";

export function useLoginForm() {
	const context = useAuthContext();
	const handleSubmit = useCallback((values, {resetForm}) => {
		// an http req would typically go here; for now, we'll just dispatch an action
		context.dispatch({
			type: AuthActions.LOGIN,
			payload: {
				user: {
					email: values.email,
					id: '123',
				},
			},
		});
	}, [context]);

	return {
		initialValues: useMemo(() => ({
			email: "",
			password: "",
		}), []),
		handleSubmit,
	}
}
