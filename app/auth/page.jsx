'use client';
import { DefaultButton } from '@/components/buttons';
import { HorizontalLogo } from '@/components/logo';
import { LoginForm, RegisterForm } from '@/components/sign-up-forms';
import { TermsOfService } from '@/components/terms-of-service';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, useState } from 'react';
import { MdClose } from 'react-icons/md';

export const TosVisibleContext = createContext();

/**
 * Página de Login
 *
 * Essa página renderiza:
 *  - O logotipo da ProgQuest
 *  - Um botão para mudar entre cadastro e login
 *  - O formulário de login e de registro
 *
 * @returns {JSX.Element} Elemento JSX da página de autenticação
 */
const Auth = () => {
	// Usado para saber se usuário está tentado registrar uma
	// conta ou fazendo login
	const [isRegister, setIsRegister] = useState(false);

	// Usado para mostrar ou esconder o painel de termos de serviço
	const [tosVisible, setTosVisible] = useState(false);

	return (
		<div
			className='relative flex w-screen h-screen max-h-screen max-w-screen
				text-text-900 bg-background-100 overflow-clip'>
			<TosVisibleContext.Provider value={{ tosVisible, setTosVisible }}>
				<div className='flex flex-col overflow-auto w-full h-full px-8 py-2'>
					<nav className='flex flex-row w-full md:justify-between justify-center items-center'>
						{/* Logo Icon */}
						<Link href='/'>
							<HorizontalLogo className='text-primary-400' />
						</Link>

						{/* Register/Login Button */}
						<DefaultButton
							className={`invisible md:visible overflow-hidden h-0 w-0
							md:h-max md:w-max px-8 py-1`}
							onClick={() => setIsRegister((prev) => !prev)}>
							{isRegister ? 'Fazer Login' : 'Registrar'}
						</DefaultButton>
					</nav>

					{/* Login Form */}
					<div className='flex flex-col w-full h-full justify-center items-center gap-0'>
						{/* Chameleon Icon */}
						<Image
							src={
								'/assets/icons/login-page-icon/hide-chameleon.svg'
							}
							width={80}
							height={80}
							className='w-20 mt-[-10px] mb-[-5px] md:w-60 md:-mb-[15px] z-10'
							alt='Camaleão olhando por cima da tela de login'
						/>
						<div
							className='flex flex-col w-[90%] md:w-[60%] lg:w-[35%]
						place-content-center border border-background-200 rounded-xl
						bg-pink-100 p-5'>
							{/* Form de Registro/Login */}
							{isRegister ? <RegisterForm /> : <LoginForm />}

							{/* Botões OAuth */}
							<div className='grid grid-cols-2 gap mx-2.5 -mt-6 md:-mt-2'>
								{/* Divisor */}
								<hr
									className='border border-gray-500 
								col-span-2 mt-2.5 mx-2.5 rounded-full'
								/>

								{/* Google Login */}
								<DefaultButton className='col-span-2 md:col-span-1'>
									<Image
										src={
											'/assets/icons/misc/logo-google.svg'
										}
										width={20}
										height={20}
										alt='Google Logo'
									/>
									Google
								</DefaultButton>

								{/* Github Login */}
								<DefaultButton className='col-span-2 md:col-span-1'>
									<Image
										src={
											'/assets/icons/misc/logo-github.svg'
										}
										width={20}
										height={20}
										alt='Github Logo'
									/>
									Github
								</DefaultButton>
							</div>

							{/* Link de cadastro/login */}
							<div
								className='visible md:invisible overflow-hidden md:-my-6
						flex flex-col w-full text-center justify-center p-6 gap-1/2'>
								<p>
									{isRegister ? 'Já' : 'Não'} tem uma conta?
								</p>
								<button
									onClick={() =>
										setIsRegister((prev) => !prev)
									}
									className='font-bold text-sm text-primary-400 hover:underline
                        		decoration-primary-400 cursor-pointer'>
									{isRegister ? 'Entre' : 'Cadastre'} aqui!
								</button>
							</div>

							{/* Termos e Condições */}
							{!isRegister && (
								<button
									onClick={(e) => {
										e.preventDefault();
										setTosVisible(true);
									}}
									className='text-primary-400 hover:scale-[1.01] text-center
									active:scale-100 transition-all cursor-pointer
									mx-2.5'>
									Termos e condições de uso
								</button>
							)}
						</div>
					</div>
				</div>
				<TermsOfService />
			</TosVisibleContext.Provider>
		</div>
	);
};

export default Auth;
