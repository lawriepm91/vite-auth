export const errors = {
	validation: {
		too_short: (resource: string, charCount: number) =>
			`${resource} is too short; it should have a minimum of ${charCount} characters.`,
		too_long: (resource: string, charCount: number) =>
			`${resource} is too long; it should have a maximum of ${charCount} characters.`,
		required: (resource: string) => `${resource} is required; please update.`,
	},
};
