import "./button.css";

export interface ButtonProps {
	/**
	 * Button contents
	 */
	children?: string | React.JSX.Element;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	/**
	 * Optional property to disable the button
	 */
	disabled?: boolean;
	/**
	 * Optional property to indicate the type of the button
	 */
	type?: "button" | "reset" | "submit";
}

export function Button({
	children,
	disabled = false,
	type = "button",
	...props
}: ButtonProps): React.ReactNode {
	return (
		<button
			type={type}
			disabled={disabled}
			className="futuristic-button"
			{...props}
		>
			{children}
		</button>
	);
}
