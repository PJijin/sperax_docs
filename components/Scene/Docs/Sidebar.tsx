import React, { useState, useRef } from 'react';
import Link from 'next/link';
import MenuItems from 'data/DocsMenu';
import { BookOpenIcon, ChatAlt2Icon, HomeIcon } from '@heroicons/react/outline';
import useOnClickOutside from 'lib/useOnClickOutside';
import Logo from 'components/UI/Logo';

const MenuSection = ({ title, links }) => {
	return (
		<div className="mt-5">
			<h5 className="px-3 mb-1 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs text-gray-900 ">
				{title}
			</h5>
			<div className="px-3">
				{links.map((link, index) => (
					<Link as={link.url} href={link.url} key={link.url}>
						<a className="pb-1 text-sm transition-colors duration-200 relative block text-gray-500 cursor-pointer hover:text-gray-900">
							{link.title}
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export const Sidebar = () => {
	const ref = useRef();

	const [visible, setVisible] = useState(false);
	useOnClickOutside(ref, () => setVisible(false));

	return (
		<>
			{visible && (
				<div ref={ref} className="fixed z-40 md:hidden min-h-screen bg-gray-50 shadow w-3/4 top-0">
					<a className="flex items-center cursor-pointer pt-5 pb-5 pl-4 border-b">
						<Logo /> <span className={`ml-2 font-100 `}>Sperax Docs</span>
					</a>
					{Object.keys(MenuItems).map((key) => {
						return <MenuSection key={key} title={key} links={MenuItems[key]} />;
					})}
				</div>
			)}

			<div className="md:hidden fixed border-t p-1 z-30 bg-gray-50 w-full bottom-0 flex items-center justify-evenly overflow-x-scroll">
				<div className="p-3 " onClick={() => setVisible(true)}>
					<BookOpenIcon className="w-8 h-8 text-gray-500" />
				</div>
				<Link as="/" href="/">
					<a className="p-3 ">
						<HomeIcon className="w-8 h-8 text-gray-500" />
					</a>
				</Link>
				<a href="https://forum.sperax.io/" target="_blank" className="p-3 " rel="noreferrer">
					<ChatAlt2Icon className="w-8 h-8 text-gray-500" />
				</a>
			</div>

			<div className="hidden md:block border-r bg-gray-50 min-h-screen p-2 md:w-1/6">
				{Object.keys(MenuItems).map((key) => {
					return <MenuSection key={key} title={key} links={MenuItems[key]} />;
				})}
			</div>
		</>
	);
};
