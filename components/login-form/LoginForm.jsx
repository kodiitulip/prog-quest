import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaGoogle, FaLock, FaUser } from "react-icons/fa";

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
		<div className='w-1/3 bg-bbox-rect text-black p-12 rounded-xl border-2 border-bbox-border'>
			{/* Chameleon Icon */}
			<Image
				src={"/assets/icons/login-page-icon/hide-chameleon.svg"}
				width={230}
				height={150}
				className='absolute left-[calc(50%-115px)] top-[78px]'
			/>

			{/* Login Form */}
			<form action=''>
				<h1 className='text-4xl text-center'>Login</h1>

				{/* Usuário */}
				<div className='relative w-full h-1/2 my-[30px] mx-0'>
					<input
						className='w-full h-full bg-bgray rounded-full
						text-gray-500 p-5'
						type='text'
						placeholder='Usuário'
						required
					/>
					<FaUser className='absolute right-5 top-1/2 -translate-y-1/2 text-base' />
				</div>

				{/* Senha */}
				<div className='relative w-full h-1/2 my-[30px] mx-0'>
					<input
						className='w-full h-full bg-bgray rounded-full
						text-gray-500 p-5'
						type='password'
						placeholder='Senha'
						required
					/>
					<FaLock className='absolute right-5 top-1/2 -translate-y-1/2 text-base' />
				</div>

				{/* Esqueceu a senha? */}
				<div className='flex flex-col'>
					<Link
						href={"#"}
						className='text-gray-500 text-right flex-grow mb-2
						hover:underline decoration-bpurple'
					>
						Esqueceu a senha?
					</Link>
				</div>

				{/* Botões */}
				<div className='grid grid-cols-2 gap-2.5'>
					{/* Entrar */}
					<button
						type='submit'
						className='col-span-2
                        flex flex-row justify-center items-center
                        p-2.5 bg-bpurple shadow-def-button 
                        rounded-full m-2.5 text-white text-2xl font-semibold
						hover:underline'
					>
						Entrar
					</button>

					{/* Divisor */}
					<hr className='border border-gray-500 col-span-2 mt-2.5 rounded-full' />

					{/* Google Login */}
					<button
						className='
                        flex flex-row justify-center items-center
                        p-2.5 gap-2.5 bg-bpurple shadow-def-button 
                        rounded-full flex-grow m-2.5 text-white text-2xl 
                        font-semibold mouse-pointer hover:underline'
					>
						<FaGoogle />
						Google
					</button>

					{/* Github Login */}
					<button
						className='
                        flex flex-row justify-center items-center
                        p-2.5 gap-2.5 bg-bpurple shadow-def-button 
                        rounded-full flex-grow m-2.5 text-white text-2xl 
                        font-semibold mouse-pointer hover:underline'
					>
						<FaGithub />
						Github
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
