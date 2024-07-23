import "./input.css";

type InputType =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week";

export interface InputProps {
	/**
	 * Mandatory property to indicate the type of entry
	 */
	type?: InputType;
	/**
	 * Mandatory property to indicate the name of the element
	 */
	name: string;
	/**
	 * Optional property to indicate the current value
	 */
	value?: string;
	/**
	 * Optional property to indicate the help text.
	 */
	placeholder?: string;
	/**
	 * Optional property to indicate if it is a required field.
	 */
	required?: boolean;
	/**
	 * Optional click handler
	 */
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
	type = "text",
	name,
	value,
	required,
	placeholder,
	onChange,
}: InputProps): React.ReactNode {
	return (
		<input
			type={type}
			name={name}
			aria-label={name}
			id={name}
			value={value}
			placeholder={placeholder}
			required={required}
			className="futuristic-input"
			onChange={onChange}
		/>
	);
}
