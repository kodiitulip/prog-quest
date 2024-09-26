'use client';

import { useContext } from 'react';
import { TosVisibleContext } from '@/app/auth/page';
import { MdClose } from 'react-icons/md';

/**
 * Um painel com os termos de serviço da plataforma
 * @returns {JSX.Element} Um painel com os termos de serviço da plataforma
 */
const TermsOfService = () => {
	const { tosVisible, setTosVisible } = useContext(TosVisibleContext);

	return (
		<div
			className={`absolute top-0 z-30 w-screen h-screen flex items-center 
				justify-center transition-all bg-black bg-opacity-20 p-20
				max-h-screen left-0 ${!tosVisible && 'hidden'}`}>
			<div
				className='relative max-w-4xl bg-pink-100 p-12 md:px-36 md:py-15
            	m-auto rounded-md animate-fade-in-up flex max-h-[90vh]
				flex-col justify-center items-center'>
				<button
					autoFocus={tosVisible}
					onClick={() => setTosVisible(false)}
					className='absolute right-4 top-4'>
					<MdClose
						size={45}
						className='hover:scale-105 transition-all focus:scale-105
						active:scale-[0.9]'
					/>
				</button>
				<h1 classname='text-md lg:text-lg'>
					Termos e Condições de Uso - ProgQuest
				</h1>
				<div className='overflow-scroll w-full h-full'>
					<p>
						Bem-vindo(a) ao ProgQuest, sua plataforma interativa de
						aprendizado de programação com um toque de cultura pop!
						Antes de embarcar nesta jornada educacional emocionante,
						é essencial entender e concordar com os Termos e
						Condições que regem a utilização dos nossos serviços.
					</p>
					<br />
					<p>
						Ao acessar e utilizar o ProgQuest, você concorda em
						cumprir e estar vinculado aos seguintes termos e
						condições. A nossa missão é proporcionar uma experiência
						educacional inovadora e envolvente, e esses termos visam
						garantir a segurança, a integridade e o respeito em
						nossa comunidade de aprendizes de programação.
					</p>
					<br />
					<p>
						Por favor, leia atentamente os Termos e Condições a
						seguir. Se tiver alguma dúvida ou preocupação, não
						hesite em entrar em contato conosco (email de alguém).
						Ao continuar a utilizar o ProgQuest, você reconhece que
						compreendeu e concorda com os termos estabelecidos.
					</p>
					<br />
					<ol>
						<li>
							<h2>1. Aceitação dos Termos:</h2>
						</li>
						<p>
							Ao acessar e utilizar o ProgQuest, você
							automaticamente concorda com estes Termos e
							Condições. Se não concordar com algum aspecto destes
							termos, pedimos que não utilize nossos serviços.
						</p>
						<br />
						<li>
							<h2>2. Uso Responsável:</h2>
						</li>
						<p>
							Compromete-se a utilizar o ProgQuest de maneira
							responsável, respeitando outros usuários e cumprindo
							todas as leis e regulamentos aplicáveis.
						</p>
						<br />
						<li>
							<h2>3. Conta do Usuário:</h2>
						</li>
						<p>
							Ao criar uma conta no ProgQuest, somos responsáveis
							por manter a confidencialidade de suas credenciais e
							informações de sua conta.
						</p>
						<br />
						<li>
							<h2>4. Propriedade Intelectual:</h2>
						</li>
						<p>
							Reconhecemos que todos os direitos autorais, marcas
							registradas e outros direitos de propriedade
							intelectual relacionados às franquias referenciadas
							em nossa plataforma são de propriedade intelectual
							exclusivas das respectivas empresas detentoras.
							Reiteramos que a plataforma não possui fins
							lucrativos, apenas educacionais, portanto não há
							ganhos derivados da utilização de propriedade
							intelectual de outrem. Buscamos utilizar as
							personagens de maneira respeitosa e meramente
							ilustrativa.
						</p>
						<br />
						<li>
							<h2>5. Privacidade e Dados Pessoais:</h2>
						</li>
						<p>
							Entende e concorda com a nossa Política de
							Privacidade, que descreve como coletamos, usamos e
							protegemos suas informações pessoais.
						</p>
						<br />
						<li>
							<h2>6. Alterações nos Termos:</h2>
						</li>
						<p>
							Reconhece que os Termos e Condições podem ser
							atualizados periodicamente, e concorda em revisá-los
							regularmente.
						</p>
						<br />
						<li>
							<h2>7. Encerramento da Conta:</h2>
						</li>
						<p>
							Reservamo-nos o direito de encerrar ou suspender sua
							conta, a nosso critério, caso haja violação destes
							Termos e Condições.
						</p>
						<br />
						<p>
							Agradecemos por utilizar o ProgQuest como sua
							plataforma de aprendizado. Estamos empolgados em
							tê-lo(a) conosco nessa jornada educacional única. Se
							precisar de esclarecimentos adicionais ou tiver
							alguma preocupação, entre em contato conosco.
						</p>
						<br />
						<p>Seja bem-vindo(a) ao ProgQuest!</p>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default TermsOfService;
