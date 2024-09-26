'use client';
import Image from 'next/image';

/**
 * Componente da Logo Horizontal
 * @param {string} [className] - Classes tailwind adicionais
 * @param {object} [props] - Propiedades adicionais
 * @returns {JSX.Element} A Logo Horizontal
 */
const HorizontalLogo = ({ className = '', ...props }) => {
	return (
		<div
			className={`flex flex-row gap-4 items-center 
				text-3xl font-extrabold ${className}`}
			{...props}>
			<Image
				src={'/assets/icons/login-page-icon/logo-icon.svg'}
				alt='logo'
				width={60}
				height={45}
				className='w-[60px] h-[45px]'
			/>
			ProgQuest
		</div>
	);
};

export default HorizontalLogo;
