import { DefaultButton } from '@/components/buttons';
import { HorizontalLogo } from '@/components/logo';
import { ResetPasswordForm } from '@/components/sign-up-forms';
import Link from 'next/link';

const ResetPassword = () => {
	return (
		<div
			className='relative flex w-screen h-screen max-h-screen max-w-screen
            text-text-900 bg-background-100 overflow-clip'>
			<div className='flex flex-col overflow-auto w-full h-full px-8 py-2'>
				<nav className='flex flex-row w-full md:justify-between justify-center items-center'>
					{/* Logo Icon */}
					<Link href='/'>
						<HorizontalLogo className='text-primary-400' />
					</Link>

					{/* Botao para voltar para a tela de login */}
					<DefaultButton
						className='invisible md:visible overflow-hidden h-0 w-0
							md:h-max md:w-max px-8 py-1'>
						<Link href='/auth'>Fazer Login</Link>
					</DefaultButton>
				</nav>

				<ResetPasswordForm />
			</div>
		</div>
	);
};

export default ResetPassword;
