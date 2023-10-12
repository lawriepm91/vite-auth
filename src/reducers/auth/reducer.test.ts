import {expect, describe, test} from 'vitest'
import {authReducer} from "./reducer";

describe('authReducer', () => {
	describe('when called with "LOGIN"', () => {
		test('it returns the user', () => {
			const USER = {email: 'blah@test.com', password: 'test'};
			expect(authReducer({user: undefined}, {type: 'LOGIN', payload: USER})).toBe(USER);
		});
	});

	describe('when called with "LOGOUT"', () => {
		test('it returns undefined', () => {
			expect(authReducer({user: undefined}, {type: 'LOGOUT', payload: undefined})).toBe(undefined);
		});
	});
});
