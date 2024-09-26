'use client';
import Link from 'next/link';
import { HorizontalLogo } from '@/components/logo';
import { HamburgerNavbar, NavigationItems } from '@/components/nav-bar';

/**
 * Um elemento de barra de navegação que está sempre no topo da página.
 *
 * Essa barra de navegação tem um logotipo da ProgQuest, e
 * duas listas de navegação.
 * Uma que apenas aparece em telas pequenas com o menu hamburger,
 * e outra de maneira horizontal com cada link relevante
 *
 * @returns {JSX.Element} A barra de navegação
 */
const Navigation = () => {
	return (
		<header
			className='fixed top-0 left-0 w-full px-5 py-4 bg-primary-300
      		flex justify-between items-center z-10'>
			{/* Logo */}
			<Link
				href='/'
				className='group relative'>
				<HorizontalLogo
					className='text-white transition-all group-active:translate-y-0
					max-w-[50%]
					group-hover:-translate-y-[2px] group-focus-within:-translate-y-[2px]'
				/>
			</Link>
			{/* Menu Hamburger */}
			<HamburgerNavbar />
			{/* Links de Navegação */}
			<NavigationItems className='hidden md:flex text-white' />
		</header>
	);
};

export default Navigation;
