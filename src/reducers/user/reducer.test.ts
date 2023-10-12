import {expect, describe, test} from 'vitest'
import {userReducer} from "./reducer";

describe('userReducer', () => {
	describe('when called with "CREATE"', () => {
		test('it returns the user', () => {
			const USER = {email: 'blah@test.com', password: 'test'};
			expect(userReducer({user: undefined}, {type: 'CREATE', payload: USER})).toBe(USER);
		});
	});

	describe('when called with "DELETE"', () => {
		test('it returns undefined', () => {
			const USER = {email: 'blah@test.com', password: 'test'};
			expect(userReducer({user: undefined}, {type: 'DELETE', payload: USER})).toBe(undefined);
		});
	});
});
