'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MdLock } from 'react-icons/md';
import { DefaultButton } from '../buttons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ResetPasswordForm = () => {
	const router = useRouter();

	const [success, setSuccess] = useState(false);

	const handleResetPassword = () => {
		// TODO: Implementar a autenticação
		setSuccess(true);

		setTimeout(() => {
			router.push('/auth');
		}, 4000);
	};

	return (
		<>
			{success ? (
				<div className='flex flex-col w-full h-full justify-center items-center gap-0'>
					<Image
						src='/assets/icons/login-page-icon/success-password.svg'
						width={380}
						height={402}
						alt='Camaleao com roupas do personagem ash de pokemon celebrando'
					/>
					<h2 className='text-3xl font-bold text-center text-primary-400'>
						Pronto
					</h2>
					<p className='text-3xl font-semibold text-center'>
						Sua senha foi alterada com sucesso!
					</p>
				</div>
			) : (
				<div className='flex flex-col w-full h-full justify-center items-center gap-0'>
					{/* Chameleon Icon */}
					<Image
						src={'/assets/icons/login-page-icon/hide-chameleon.svg'}
						width={80}
						height={80}
						className='w-20 mt-[-10px] mb-[-5px] md:w-60 md:-mb-[15px] z-10'
						alt='Camaleão olhando por cima da tela de login'
					/>
					<div
						className='flex flex-col w-[90%] md:w-[60%] lg:w-[35%] place-content-center 
                		border border-background-200 rounded-xl bg-pink-100 p-5'>
						{/* FORMULARIO */}
						<form
							className='flex flex-col w-full h-full gap-2 p-2'
							action={handleResetPassword}>
							<h1 className='text-center font-bold text-3xl'>
								Redefinir a Senha
							</h1>

							{/* Nova Senha */}
							<div className='relative flex flex-row m-2 text-background-200'>
								<input
									className='w-full h-full bg-background-100 rounded-full
                            		px-4 py-2 gap-2'
									type='password'
									placeholder='Nova Senha'
									required
								/>
								<MdLock
									className='absolute right-2.5 translate-y-1/2'
									size={20}
								/>
							</div>

							{/* Confirmar Nova Senha */}
							<div className='relative flex flex-row m-2 text-background-200'>
								<input
									className='w-full h-full bg-background-100 rounded-full
                            		px-4 py-2 gap-2'
									type='password'
									placeholder='Confirmar Nova Senha'
									required
								/>
								<MdLock
									className='absolute right-2.5 translate-y-1/2'
									size={20}
								/>
							</div>
							{/* ENVIAR */}
							<DefaultButton type='submit'>Enviar</DefaultButton>
						</form>
						{/* Link para voltar para a pagina de login */}
						<div
							className='visible md:invisible overflow-hidden md:-my-6
                    		flex flex-col w-full text-center justify-center p-6 gap-1/2'>
							<Link
								href='/auth'
								className='font-bold text-sm text-primary-400 hover:underline
                        		decoration-primary-400 cursor-pointer'>
								Faça seu login aqui!
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ResetPasswordForm;
