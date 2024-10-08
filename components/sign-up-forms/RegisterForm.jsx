import { MdLock, MdPerson, MdMail } from 'react-icons/md';
import { DefaultButton } from '@/components/buttons';

/**
 * Um quadro com forms de cadastro para credenciais e OAuth
 *
 * Nesse quadro conta com caixas de texto para as credenciais do usuário
 * e botões para cadastrar com Google ou Github
 *
 * TODO: Fazer a autenticação funcional
 * @returns {JSX.Element}
 */
const RegisterForm = ({ setTosVisible = () => {} }) => {
	return (
		<form className='flex flex-col w-full h-full gap-2 p-2'>
			{/* Register Form */}
			<h1 className='text-center font-bold text-3xl'>Registrar</h1>
			{/* Usuário */}
			<div className='relative flex flex-row m-2 text-background-200'>
				<input
					className='w-full h-full bg-background-100 rounded-full
					px-4 py-2 gap-2'
					type='text'
					placeholder='Usuário'
					name='username'
					required
				/>
				<MdPerson
					className='absolute right-2.5 translate-y-1/2'
					size={20}
				/>
			</div>
			{/* Email */}
			<div className='relative flex flex-row m-2 text-background-200'>
				<input
					className='w-full h-full bg-background-100 rounded-full
					px-4 py-2 gap-2'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
				<MdMail
					className='absolute right-2.5 translate-y-1/2'
					size={20}
				/>
			</div>
			{/* Senha */}
			<div className='relative flex flex-row m-2 text-background-200'>
				<input
					className='w-full h-full bg-background-100 rounded-full
					t	px-4 py-2 gap-2'
					type='password'
					placeholder='Senha'
					name='password'
					required
				/>
				<MdLock
					className='absolute right-2.5 translate-y-1/2'
					size={20}
				/>
			</div>
			{/* Termos de Uso */}
			<div className='flex text-center mx-2.5 align-center justify-center text-sm md:text-lg'>
				<input
					type='checkbox'
					name='tos'
					className='mx-2.5 w-4 h-4'
					required
				/>
				Aceito os
				<div
					onClick={() => setTosVisible(true)}
					className='text-purple-200 hover:underline 
					decoration-black ml-1 cursor-pointer'>
					Termos e condições de uso
				</div>
			</div>
			{/* Registrar */}
			<DefaultButton type='submit'>Registrar</DefaultButton>
		</form>
	);
};

export default RegisterForm;
