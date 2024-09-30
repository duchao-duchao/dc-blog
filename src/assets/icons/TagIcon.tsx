import { type IconProps } from '@/assets';

export function TagIcon(props: IconProps = {}) {
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
				d="M8 8H8.01M3.11768 7.65876L3.07447 8.47968C2.99172 10.0518 2.95035 10.8379 3.1001 11.5811C3.23281 12.2399 3.47524 12.8716 3.81725 13.45C4.20315 14.1026 4.75976 14.6593 5.87297 15.7725L8.29448 18.194C9.6106 19.5101 10.2687 20.1682 10.9743 20.5277C12.4003 21.2543 14.0881 21.2543 15.5142 20.5277C16.2198 20.1682 16.8778 19.5101 18.194 18.194C19.5101 16.8778 20.1682 16.2198 20.5277 15.5142C21.2543 14.0881 21.2543 12.4003 20.5277 10.9743C20.1682 10.2687 19.5101 9.6106 18.194 8.29448L15.7725 5.87298C14.6593 4.75976 14.1026 4.20315 13.45 3.81725C12.8716 3.47524 12.2399 3.23281 11.5811 3.1001C10.8379 2.95035 10.0518 2.99172 8.47968 3.07447L7.65876 3.11768C6.13396 3.19793 5.37156 3.23805 4.78079 3.55489C4.26041 3.83397 3.83397 4.26041 3.55489 4.78079C3.23805 5.37156 3.19793 6.13396 3.11768 7.65876ZM8.4895 7.98767C8.4895 8.26381 8.26564 8.48767 7.9895 8.48767C7.71336 8.48767 7.4895 8.26381 7.4895 7.98767C7.4895 7.71153 7.71336 7.48767 7.9895 7.48767C8.26564 7.48767 8.4895 7.71153 8.4895 7.98767Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
