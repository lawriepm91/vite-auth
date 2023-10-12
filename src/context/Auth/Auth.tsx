import * as Types from './Auth.types';
import {FC, ReactNode, createContext} from "react";
import {useAuth} from "./useAuth";

export const Context = createContext<Types.Context>({
	state: undefined,
	dispatch: () => undefined,
});

export const AuthProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const {value} = useAuth();
  return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	);
};
