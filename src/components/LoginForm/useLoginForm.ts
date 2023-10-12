import {useCallback, useMemo} from "react";
import {useAuthContext} from "../../hooks";
import {CreateReadUpdateDeleteEnum} from "../../enums";

export function useLoginForm() {
	const context = useAuthContext();
	const handleSubmit = useCallback((values) => {
		context.dispatch({
			type: CreateReadUpdateDeleteEnum.CREATE,
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
