import { Sidebar } from 'components/Scene/Docs/Sidebar';
import React from 'react';

const Docs = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex-grow md:ml-5 md:pt-5 min-h-screen flex justify-center items-center text-gray-400">
				Select category from left side
			</div>
		</div>
	);
};

export default Docs;
