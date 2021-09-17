import React from 'react';
import Link from 'next/link';
import Posts from 'data/GettingStarted';

const GettingStarted = () => {
	return (
		<div className="bg-white rounded shadow-sm p-5">
			<h3 className="uppercase tracking-wide font-semibold  text-gray-900">Getting Started</h3>

			<div className="mt-5">
				{Posts.map((post) => (
					<Link key={post.name} as={post.link} href={post.link}>
						<a className="pb-5 block text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded p-2">
							{post.name}
							<p className="text-sm text-gray-400">{post.description}</p>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default GettingStarted;
