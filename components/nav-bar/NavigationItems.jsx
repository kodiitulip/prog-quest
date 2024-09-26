'use client';
import Link from 'next/link';

/**
 * Um componente que renderiza uma navegação com links para Home, About, Contact e Sign-Up.
 *
 * @param {string} [className] - Classes tailwind adicionais.
 * @returns {JSX.Element} O componente de navegação.
 */
const NavigationItems = ({ className = '' }) => {
	return (
		<nav className={className}>
			<Link
				href='/'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Home
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='/'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				About
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='/'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Contact
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
			<Link
				href='/auth'
				className='relative text-md font-medium mx-5 transition-all
					flex flex-col group'>
				Sign-Up
				<div
					className='transition-all h-[2px] w-0 bg-current
						group-hover:w-full group-focus-within:w-full'></div>
			</Link>
		</nav>
	);
};

export default NavigationItems;
