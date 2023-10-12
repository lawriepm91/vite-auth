import {useCallback, useMemo} from "react";
import {useAuthContext} from "../../hooks";
import {AuthActions} from "../../actions";

export function useLoginForm() {
	const context = useAuthContext();
	const handleSubmit = useCallback((values) => {
		context.dispatch({
			type: AuthActions.LOGIN,
			payload: {
				user: {
					email: values.email,
					id: '123',
				},
			},
		});
	}, []);

	return {
		initialValues: useMemo(() => ({
			email: "woof@gmail.com",
			password: "blahblahblah",
		}), []),
		handleSubmit,
	}
}
