import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

import { getPostBySlug, getAllPosts } from 'lib/api';
import markdownToHtml from 'lib/markdowntohtml';
import { Sidebar } from 'components/Scene/Docs/Sidebar';
import Config from 'lib/config';
import { dateFormat } from 'lib/helpers';
import { PencilAltIcon } from '@heroicons/react/outline';

export default function Post({ post }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<>
			<>
				{router.isFallback ? (
					<p>Loading…</p>
				) : (
					<>
						<div className="md:flex">
							<Sidebar />
							<div className="flex-grow md:ml-5 md:pt-5 relative pb-10">
								<article className="m-5 md:m-0 pb-10 max-w-7xl mx-auto px-4 sm:px-6 article_view">
									<Head>
										<title>Sperax - {post.title}</title>
									</Head>

									<h1 className="mb-0">{post.title}</h1>

									<PostBody content={post.content} />

									<div className="md:flex items-center justify-between">
										<div className="flex items-center mt-5">
											<img
												src={post.author.avatar}
												alt=""
												className="w-10 h-10 rounded-full mr-2"
											/>
											<div className="text-gray-500 text-sm">
												Written by {post.author.name}
												<div className="text-gray-400">
													Published on {dateFormat(post.date)}
												</div>
											</div>
										</div>
										<a
											href={`${Config.docs_repo}/docs/${post.slug}.md`}
											className=" mt-5 md:mt-0 text-sm text-gray-400 hover:text-gray-800 cursor-pointer flex items-center"
										>
											<PencilAltIcon className="w-5 h-5 text-gray-400 mr-1" /> Edit Post
										</a>
									</div>
								</article>
							</div>
						</div>
					</>
				)}
			</>
		</>
	);
}

function PostBody({ content }) {
	return (
		<div className="max-w-5xl">
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content']);
	// @ts-ignore
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map((post: { slug: string }) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
