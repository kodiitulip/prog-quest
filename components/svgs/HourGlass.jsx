'use client';

const HourGlass = ({ size = 42 }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 33 42'
			fill='currentColor'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M7.8065 37.8928H24.7913V31.6504C24.7913 29.2823 23.9679 27.2832 22.3212 25.6531C20.6744 24.023 18.667 23.208 16.2989 23.208C13.9308 23.208 11.9234 24.023 10.2766 25.6531C8.62987 27.2832 7.8065 29.2823 7.8065 31.6504V37.8928ZM16.2989 18.7928C18.667 18.7928 20.6744 17.9694 22.3212 16.3227C23.9679 14.6759 24.7913 12.6685 24.7913 10.3004V4.10795H7.8065V10.3004C7.8065 12.6685 8.62987 14.6759 10.2766 16.3227C11.9234 17.9694 13.9308 18.7928 16.2989 18.7928ZM0 41.2993V37.8928H4.4V31.6504C4.4 29.3076 5.04872 27.1735 6.34615 25.2482C7.64362 23.3228 9.36845 21.9069 11.5206 21.0004C9.36845 20.0605 7.64362 18.6279 6.34615 16.7025C5.04872 14.7772 4.4 12.6431 4.4 10.3004V4.10795H0V0.689453H32.6098V4.10795H28.2098V10.3004C28.2098 12.6431 27.5611 14.7772 26.2636 16.7025C24.9661 18.6279 23.2413 20.0605 21.0891 21.0004C23.2413 21.9069 24.9661 23.3228 26.2636 25.2482C27.5611 27.1735 28.2098 29.3076 28.2098 31.6504V37.8928H32.6098V41.2993H0Z' />
		</svg>
	);
};
export default HourGlass;
