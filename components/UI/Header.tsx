import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import HeaderNav from 'data/HeaderNav';

const MenuItem = ({ name, inverse, link }) => (
	<Link href={link} as={link}>
		<a
			className={` cursor-pointer ${
				inverse ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
			} `}
		>
			{name}
		</a>
	</Link>
);

const Header = () => {
	const router = useRouter();

	const home = router.asPath === '/' ? true : false;

	return (
		<div className={`  md:relative p-5 flex justify-between  ${!home ? 'bg-gray-50 border-b' : 'bg-gray-800'}`}>
			<Link as="/" href="/">
				<a className="flex items-center cursor-pointer">
					<Logo /> <span className={`ml-2 font-100 ${home && 'text-gray-100'}`}>Sperax Docs</span>
				</a>
			</Link>

			<nav className="flex items-center space-x-5 text-sm">
				{HeaderNav.map((link) => (
					<MenuItem key={link.name} inverse={home} name={link.name} link={link.link} />
				))}
			</nav>
		</div>
	);
};

export default Header;
