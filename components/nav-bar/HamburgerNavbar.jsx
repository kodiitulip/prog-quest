'use client';
import { useState } from 'react';
import { MdClose, MdDensityMedium } from 'react-icons/md';
import { NavigationItems } from '@/components/nav-bar';

/**
 * HamburgerNavbar component
 *
 * Esse componente é uma navigation mobile que pode ser aberta ou fechada.
 * Contem uma lista de links, e um botão para abrir e fechar.
 *
 * @returns {JSX.Element}
 */
const HamburgerNavbar = () => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<button
				onClick={() => setVisible((prev) => !prev)}
				className={`${visible ? 'text-black' : 'text-white'}
                cursor-pointer hover:scale-105 transition-all 
                focus:scale-105 active:scale-100 z-20 relative md:hidden`}>
				{visible ? (
					<MdClose size={32} />
				) : (
					<MdDensityMedium size={32} />
				)}
			</button>
			<div
				className={`absolute top-0 right-0 max-w-md bg-background-100
                    p-12 flex flex-col z-[19] md:hidden transition-all rounded-b-3xl
                    items-end
                    ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
				<NavigationItems className='text-black text-2xl text-center' />
			</div>
		</>
	);
};

export default HamburgerNavbar;
