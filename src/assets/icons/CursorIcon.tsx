import { type IconProps } from '@/assets';

export function CursorIcon(props: IconProps = {}) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.82273 10.1715C3.12471 7.37941 2.7757 5.98337 3.15673 5.01038C3.48928 4.16117 4.16117 3.48928 5.01038 3.15673C5.98337 2.7757 7.37941 3.12471 10.1715 3.82273L15.516 5.15886C17.8979 5.75433 19.0888 6.05206 19.5719 6.38162C21.3911 7.62268 21.4896 10.2702 19.7677 11.6431C19.3104 12.0076 18.1449 12.393 15.8139 13.1639C15.3953 13.3023 15.1861 13.3715 14.9971 13.4622C14.3257 13.7842 13.7843 14.3257 13.4622 14.9971C13.3715 15.186 13.3023 15.3953 13.1639 15.8139C12.393 18.1449 12.0076 19.3105 11.6431 19.7677C10.2702 21.4896 7.62269 21.3911 6.38163 19.5719C6.05206 19.0888 5.75433 17.8979 5.15886 15.516L3.82273 10.1715Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
