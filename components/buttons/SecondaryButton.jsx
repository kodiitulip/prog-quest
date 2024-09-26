/**
 * Um botão
 *
 * Diferent do DefaultButton, esse botão é mais plano
 * e tem uma cor de fundo padrão verde, porem pode ser alterado com
 * tailwind adicional.
 *
 * @param {string} [className] - Tailwind adicional.
 * @param {*} children - O que vai dentro do botão.
 * @param {Object} props - Propriedades adicionais para passar ao botão.
 * @returns {ReactElement} Um botão.
 */
const SecondaryButton = ({ className = '', children, ...props }) => {
	return (
		<button
			{...props}
			className={`flex flex-row justify-center items-center
			bg-lime-500 hover:bg-lime-400 focus:bg-lime-400
            shadow-md hover:-translate-y-1 active:translate-y-0 focus:-translate-y-1
			rounded-full text-white font-semibold mouse-pointer transition-all
			${className}`}>
			{children}
		</button>
	);
};

export default SecondaryButton;
