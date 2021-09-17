import { useState } from 'react';
import GettingStarted from 'components/Scene/Home/GettingStarted';
import { HeroSection } from 'components/Scene/Home/HeroSection';
import QuickArticle from 'components/Scene/Home/QuickArticle';
import QiuckLinks from 'components/Scene/Home/QuickLinks';
import SearchBar from 'components/UI/SearchBar';
import Head from 'next/head';
import { getAllPosts } from 'lib/api';
import Link from 'next/link';
import SocialCard from 'components/UI/SocialCard';
import QuickArticlePost from 'data/QuickArticle';

function Home({ allPosts }) {
	const [query, setQuery] = useState('');

	return (
		<div className="bg-gray-100 min-h-screen pb-10">
			<Head>
				<title>Sperax Docs</title>
			</Head>

			<HeroSection />

			<SearchBar query={query} setQuery={setQuery} />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 ">
				{query ? (
					<div className="bg-white shadow rounded p-5">
						<h4 className="font-semibold  text-gray-900 ">
							Search results for {'"'}
							{query}
							{'"'}
						</h4>

						<div className="mt-5 mb-3">
							{allPosts
								.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
								.map((post) => (
									<Link href={`/docs/${post.slug}`} as={`/docs/${post.slug}`} key={post.slug}>
										<a>{post.title}</a>
									</Link>
								))}

							{allPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
								.length === 0 && <p className="text-gray-500">No search results</p>}
						</div>

						<a className="text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => setQuery('')}>
							Clear search
						</a>
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
							{QuickArticlePost.map((post) => (
								<QuickArticle key={post.slug} title={post.title} message={post.message} />
							))}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
							<GettingStarted />
							<QiuckLinks />
						</div>
					</>
				)}

				<div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-5 mb-5">
					<SocialCard
						href="https://discord.gg/rs7nckfQzq"
						title="Discord"
						description="Join in discord to get realtime help"
					/>
					<SocialCard href="https://forum.sperax.io/" title="Forum" description="Discuss in community" />
					<SocialCard href="https://github.com/Sperax" title="Github" description="View our github repo" />
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt']);

	return {
		props: { allPosts },
	};
}

export default Home;
