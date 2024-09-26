import Link from 'next/link';

import { MdLock, MdPerson } from 'react-icons/md';
import { DefaultButton } from '@/components/buttons';

/**
 * Um quadro com forms de login para credenciais e OAuth
 *
 * Nesse quadro conta com caixas de texto para as credenciais do usuário
 * e botões para logar com Google ou Github
 *
 * TODO: Fazer a autenticação funcional
 * @returns {JSX.Element}
 */
const LoginForm = () => {
	return (
		<form className='flex flex-col w-full h-full gap-2 p-2'>
			{/* Login Form */}
			<h1 className='text-center font-bold text-3xl'>Fazer Login</h1>

			{/* Usuário */}
			<div className='relative flex flex-row m-2 text-background-200'>
				<input
					className='w-full h-full bg-background-100 rounded-full
					px-4 py-2 gap-2'
					type='text'
					placeholder='Usuário'
					required
				/>
				<MdPerson
					className='absolute right-2.5 translate-y-1/2'
					size={20}
				/>
			</div>

			{/* Senha */}
			<div className='relative flex flex-row m-2 text-background-200'>
				<input
					className='w-full h-full bg-background-100 rounded-full
					px-4 py-2 gap-2'
					type='password'
					placeholder='Senha'
					required
				/>
				<MdLock
					className='absolute right-2.5 translate-y-1/2'
					size={20}
				/>
			</div>

			{/* Esqueceu a senha? */}
			<Link
				href={'/auth/reset-password'}
				className='text-right hover:underline mx-2.5 
				decoration-primary-400 text-sm md:text-md'>
				Esqueceu a senha?
			</Link>
			{/* Entrar */}
			<DefaultButton type='submit'>Entrar</DefaultButton>
		</form>
	);
};

export default LoginForm;
