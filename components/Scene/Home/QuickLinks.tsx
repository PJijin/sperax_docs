import React from 'react';
import Link from 'next/link';
import Resources from 'data/QuickLinks';

const QiuckLinks = () => {
	return (
		<div className="bg-white rounded shadow-sm p-5">
			<h3 className="uppercase tracking-wide font-semibold  text-gray-900">Quick Links</h3>

			<div className="mt-5">
				{Resources.map((resource) => (
					<Link key={resource.name} as={resource.link} href={resource.link}>
						<a className="pb-2 block text-gray-400 hover:text-gray-900">{resource.name}</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default QiuckLinks;
