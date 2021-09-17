import React from 'react';
import Link from 'next/link';

const QuickArticle = ({ title, message }) => {
	return (
		<Link href="/docs/overview" as="/docs/overview">
			<a className="bg-white shadow-sm rounded p-5 hover:bg-gray-50 cursor-pointer">
				<h1 className="text-normal font-bold">{title}</h1>

				<p className="mt-2  text-gray-600">{message}</p>
			</a>
		</Link>
	);
};

export default QuickArticle;
