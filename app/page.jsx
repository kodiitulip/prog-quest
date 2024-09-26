'use client';
import { SecondaryButton } from '@/components/buttons';
import { CreatorsCarousel } from '@/components/misc';
import { Navigation } from '@/components/nav-bar';

/**
 * Componete da Página inicial do site
 * @returns {JSX.Element} Next Component: 'Home Page'
 */
const Home = () => {
	return (
		<div className='bg-white w-full h-max text-sm'>
			<Navigation />
			{/* Banner */}
			<div
				className='w-full bg-primary-300 rounded-b-[4rem] flex flex-col
				lg:flex-row mt-2'>
				<div
					className='p-20 pb-10 md:pb-20 flex flex-col items-center
					lg:items-start text-center lg:text-left'>
					<h1
						className='text-4xl text-black mt-8
						sm:text-5xl'>
						ProgQuest: <br /> Mais alguma.
					</h1>
					<p className='text-xl mt-8 font-semibold pr-5 '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					<SecondaryButton
						onClick={() => {}}
						className='mt-8 text-2xl mx-2 p-6 px-12'>
						Acessar
					</SecondaryButton>
				</div>
				<div className='p-16 pt-2 md:pt-24 flex justify-center items-center'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]'></div>
				</div>
			</div>
			{/* Hero Section */}
			<div className='w-full flex flex-col-reverse lg:flex-row xl:mt-16'>
				<div className='p-12 flex justify-center items-center'>
					<div
						className='bg-gray-300 rounded-[4rem] 
						min-w-[25rem] min-h-[25rem]'></div>
				</div>
				<div
					className='p-12 flex flex-col items-center
						lg:items-end text-center lg:text-right'>
					<h1 className='text-4xl text-black sm:text-5xl'>
						Por dentro <br /> dessa viagem
					</h1>
					<p className='text-xl mt-8 font-semibold pl-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quidem, magni nemo ipsum autem ullam id, culpa minima
						sunt numquam blanditiis ex, assumenda deleniti. Quis
						aliquid deserunt, excepturi incidunt doloremque ut.
					</p>
					<SecondaryButton
						onClick={() => {}}
						className='mt-8 text-2xl mx-2 p-6 px-12
						bg-purple-500 hover:bg-purple-400 focus:bg-purple-400'>
						Acessar
					</SecondaryButton>
				</div>
			</div>
			{/* Knowlage Section */}
			<div className='w-full flex flex-col mt-8 min-h-[35rem] xl:mt-16'>
				<div className='flex justify-center items-center p-3'>
					<h1 className='text-4xl text-black sm:text-5xl text-center md:max-w-2xl'>
						Níveis de Conhecimento
					</h1>
				</div>
				<div
					className='grid grid-cols-2
					lg:flex flex-row justify-evenly px-10 flex-grow'>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5'></div>
					<div
						className='bg-gray-300 rounded-[4rem]
						flex-grow m-5 col-span-2'></div>
				</div>
			</div>
			{/* Creators Carrousel */}
			<div className='w-full flex flex-col mt-8'>
				<h1 className='text-4xl text-black sm:text-5xl text-center m-10'>
					Membros Criadores
				</h1>

				<CreatorsCarousel />
			</div>
			{/* Footer */}
			<div className='mt-16 h-[8rem] bg-background-200'></div>
		</div>
	);
};

export default Home;
