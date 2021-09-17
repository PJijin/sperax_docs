import React from 'react';

const SocialIcon = ({ type }) => {
	switch (type) {
		case 'discord':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
					width="24"
					height="24"
					className="w-10 h-10 mr-5"
				>
					<path
						fill="#8c9eff"
						d="M40 12s-4.585-3.588-10-4l-.488.976C34.408 10.174 36.654 11.891 39 14c-4.045-2.065-8.039-4-15-4s-10.955 1.935-15 4c2.346-2.109 5.018-4.015 9.488-5.024L18 8c-5.681.537-10 4-10 4s-5.121 7.425-6 22c5.162 5.953 13 6 13 6l1.639-2.185C13.857 36.848 10.715 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.857 4.848-8.639 5.815L33 40s7.838-.047 13-6c-.879-14.575-6-22-6-22zM17.5 30c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4zm13 0c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4z"
					></path>
				</svg>
			);
		case 'github':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 120.78 117.79"
					className="w-10 h-10 mr-5 text-gray-600"
				>
					<defs></defs>
					<g id="Layer_2" data-name="Layer 2">
						<g id="Layer_1-2" data-name="Layer 1">
							<path
								className="cls-1"
								d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
							></path>
							<path
								className="cls-2"
								d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
							></path>
							<path
								className="cls-2"
								d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
							></path>
							<path
								className="cls-2"
								d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
							></path>
							<path
								className="cls-2"
								d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
							></path>
							<path
								className="cls-2"
								d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
							></path>
							<path
								className="cls-2"
								d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
							></path>
							<path
								className="cls-2"
								d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
							></path>
						</g>
					</g>
				</svg>
			);

		case 'forum':
			return (
				<svg
					className="w-10 h-10 mr-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
					/>
				</svg>
			);

		default:
			return null;
	}
	return null;
};

const SocialCard = ({ href, title, description }) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<div className="bg-white rounded p-5 flex items-center shadow-sm text-brand">
				<SocialIcon type={title.toLowerCase()} />
				<div>
					<b className="text-gray-600 text-brand-hover">{title}</b>
					<p className="text-sm text-gray-500">{description}</p>
				</div>
			</div>
		</a>
	);
};

export default SocialCard;
