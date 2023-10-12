import * as Types from "./Input.types";

export const Input = (props: Types.Props) => {
	return (
		<div className={'flex flex-col w-full mb-3'}>
			<input
				className={'w-full border-2 border-slate-400 rounded-lg border-solid h-10 p-2'}
				value={props.value}
				onChange={(e) => props.handleChange(e.target.value)}
				placeholder={props.placeholder}
				type={props.type || 'text'}
			/>
			{props.error && (
				<small className={'mt-1 text-red-700'}>{props.error}</small>
			)}
		</div>
	);
};
