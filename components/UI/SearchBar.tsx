import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useHotkeys } from 'react-hotkeys-hook';

export const useFocus = (): [React.MutableRefObject<HTMLInputElement>, VoidFunction] => {
	const htmlElRef = React.useRef<HTMLInputElement>(null);
	const setFocus = React.useCallback(() => {
		if (htmlElRef.current) htmlElRef.current.focus();
	}, [htmlElRef]);

	return React.useMemo(() => [htmlElRef, setFocus], [htmlElRef, setFocus]);
};

const SearchBar = ({ query, setQuery }) => {
	const [inputRef, setInputFocus] = useFocus();

	useHotkeys('ctrl+k', () => setInputFocus());
	useHotkeys('cmd+k', () => setInputFocus());

	return (
		<div className="flex justify-center items-center">
			<div className="mb-5 relative flex items-center md:w-1/4 -mt-6">
				<SearchIcon className="w-5 h-5 text-gray-500 absolute left-4" />

				<input
					ref={inputRef}
					type="text"
					name="search"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					id="search"
					placeholder="Search"
					className="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full pr-12 sm:text-sm border-gray-300 text-gray-900 rounded-md pt-4 pb-4 pl-12"
				/>
				<div className="absolute inset-y-0 right-0  py-1.5 pr-1.5 hidden md:flex">
					<kbd className="inline-flex items-center border border-gray-200 rounded pt-2 pb-2 text-sm font-sans font-medium text-gray-400 pl-2 pr-2">
						⌘K
					</kbd>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
