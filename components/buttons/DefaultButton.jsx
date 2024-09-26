'use client';
import React from 'react';

/**
 * Um botão padronizado com os estilos adequados
 *
 * Sombra, cor e cor de texto pre selecionadas
 * @returns Um botão padronizado
 */
const DefaultButton = ({ className = '', children, ...props }) => {
	return (
		<button
			{...props}
			className={`flex flex-row justify-center items-center
			p-2.5 gap-2.5 bg-primary-400 shadow-primary-500 active:shadow-primary-500
			shadow-button-default active:shadow-button-active
			rounded-2xl m-2.5 text-white text-md lg:text-xl active:translate-y-[4px]
			font-semibold mouse-pointer transition-all hover:bg-purple-500 focus:outline-none
			focus:bg-purple-500 focus:text-gray-200 hover:text-gray-200
			${className}`}>
			{children}
		</button>
	);
};

export default DefaultButton;
